declare interface JiraBoard {
  'id': number
  'self': string
  'name': string
  'type': string
}

declare interface JiraBoardList {
  'maxResults': number
  'startAt': number
  'total': number
  'isLast': boolean
  'values': JiraBoard[]
}
