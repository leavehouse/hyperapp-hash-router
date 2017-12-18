import { parseRoute } from "./parseRoute"

export function Route(props) {
  var location = props.location || window.location
  var hashPathname = location.hash.substring(2);
  var match = parseRoute(props.path, hashPathname, {
    exact: !props.parent
  })

  return (
    match &&
    props.render({
      match: match,
      location: location
    })
  )
}
