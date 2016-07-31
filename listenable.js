var that

export default function listenable (component) {
    that = component
    that.state = that.state || {
        currentPostIndex: 0
    }
    let { currentPostIndex } = that.state
    const { posts, isFetching } = that.props
    const isEmpty = posts.length === 0
    if (!isEmpty && !isFetching) {
        say(posts[currentPostIndex].title).then(obey)
    }
}

function obey() {
    listenForUserInput({
        '': next,
        'proceed': next,
        'elaborate': elaborate,
        'select reddit': () => say('which one?').then(() => listenForUserInput()).then(that.handleChange),
        'refresh': () => that.handleRefreshClick()
    })
}

function next() {
    let { currentPostIndex } = that.state
    if (currentPostIndex + 1 === that.props.posts.length) {
        say('no posts').then(obey)
    } else {
        that.setState({currentPostIndex: currentPostIndex + 1})
    }
}

function elaborate () {
    say(that.props.posts[that.state.currentPostIndex].selftext || 'this is an external link').then(obey)
}
