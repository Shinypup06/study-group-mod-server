// Sample post json
/*
 * How it works:
 * List of posts called "posts"
 * Loop through list (for loop) to get all of the post elements of the array
 * Posts are individual jsons
 * Display posts using DOM
 */

let posts = [
    {
        title: "Sample Title",
        author: "Alan Li",
        className: "Coding",
        classPeriod: 0,
        content: "this is a sample post",
        date: Date.now(),
        // embedded comment array element, works similarly to post json where you loop through to get info
        comments: [
            {
                author: "Alan Li",
                content: "this is a sample comment",
                date: Date.now()
            }
        ]
    }
]