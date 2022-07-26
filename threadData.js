// Sample post json
/*
 * How it works:
 * List of posts called "posts"
 * Loop through list (for loop) to get all of the post elements of the array
 * Posts are individual jsons
 * Display posts using DOM
 * 
 * JSONs should be stored on the database so that it can be saved
 */

let posts = [
    {
        title: "Sample Title",
        author: "Alan Li",
        className: "Coding",
        classPeriod: 0,
        content: "this is a sample post",
        img: "https://tapinto-production.s3.amazonaws.com/uploads/articles/he/best_crop_7e9f9e893aaf14fc4674_Heritage_Team_A_Middle_School_National_Championship_Tournament_2021.jpg?id=3524574",
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