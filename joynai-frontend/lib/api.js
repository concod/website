import client from "./sanity";

// const sections = `
// 'hero':content[0]
// `;

export default async function pageQuery() {
  const results = await client.fetch(
    `*[_type == "page"]{content[]{...,'videourl':video.asset->url,'url':video[0].asset->url,'$WM':DPW.rows[].cells,'WF':wellfactor.rows[].cells}}[0]`
  );
  return results;
}
