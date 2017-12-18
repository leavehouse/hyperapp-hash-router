import { h } from "hyperapp"

export function Link(props, children) {
  return h("a", {href: '#!'+props.to}, children)
}
