export default function useBoardsQuery() {
  const startAt = ref(0)

  const results = useInfiniteQuery(['boards'], {
    async queryFn() {
      const { data } = await useJiraData('agile/1.0/board', {
        query: {
          startAt: startAt.value,
        },
      })

      if (!data.value.lastPage)
        startAt.value += data.value.maxResults

      return data
    },
    getNextPageParam(lastPage) {
      return !lastPage.value.isLast ? startAt.value : undefined
    },
  })

  async function fetchAll() {
    while (results.hasNextPage?.value)
      await results.fetchNextPage()
  }

  watch(results.isSuccess, (isSuccess) => {
    if (isSuccess)
      fetchAll()
  })

  const items = computed(() => {
    return results.data.value?.pages?.flatMap(page => page.value.values) ?? []
  })

  return { ...results, items }
}
