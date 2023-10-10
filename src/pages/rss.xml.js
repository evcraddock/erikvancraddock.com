import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('article'))
      .filter((a) => a.data.visible)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

	return rss({
		title: SITE_TITLE || '',
		description: SITE_DESCRIPTION || '',
		site: context.site,
    items: posts.map((post) => {
      
      const mm = (post.data.date.getMonth() + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      return {
			...post.data,
      pubDate: post.data.date,
			link: `/${post.data.date.getFullYear()}/${mm}/${post.slug}/`,
		}}),
	});
}
