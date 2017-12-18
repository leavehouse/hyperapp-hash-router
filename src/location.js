window.location.hash = window.location.hash || '#!/';

export var location = {
  state: {
    pathname: window.location.hash.substring(2),
  },
  actions: {
    set: function(data) {
      return data
    }
  },
  subscribe: function(actions) {
    function handleLocationChange(e) {
      actions.set({
        pathname: window.location.hash.substring(2),
      })
    }

    addEventListener("hashchange", handleLocationChange)

    return function() {
      removeEventListener("hashchange", handleLocationChange)
    }
  }
}
