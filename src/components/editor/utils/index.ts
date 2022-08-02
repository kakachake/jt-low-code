export const traverse = <T extends { children: T[] }>(data: T, fn: (param: T) => boolean) => {
  if (fn(data) === true) {
    return true
  }

  if (data && data.children) {
    for (let i = data.children.length - 1; i >= 0; i--) {
      if (traverse(data.children[i], fn)) return true
    }
  }
}
