export default async function ({ store, from }) {
  if (!from) {
    await store.dispatch('blog/fetchPosts')
  }
}
