import { fetchQuery, graphql } from 'relay-runtime'

const query = graphql`
  query DeviceInfosQuery($t: Bool!) {
    DeviceInfos(T: $t) {
      infos {
        key
        value
      }
    }
  }
`

export default context => ({
  graphql: query,
  fetch: async () =>
    (await fetchQuery(context.environment, query, { t: true })).DeviceInfos,
})