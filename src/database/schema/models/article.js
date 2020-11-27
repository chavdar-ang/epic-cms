export default {
    settings: {
        name: "Article",
        slug: "article",
        type: "document", // document or edge?
        collection: "articles",
        uid: "_id",
        description: "A description about the model.",
        increments: true,
        timestamps: true,
    },
    fields: [
        {
            slug: "title",
            name: "Title",
            type: "input",
            rules: {
                required: true,
                min: 3,
                max: 32
            }
        },
        {
            slug: "body",
            name: "Body",
            type: "textarea",
            rules: {
                required: true,
                min: 20,
                max: 1000
            }
        },
        {
            slug: "author",
            name: "Author (plain)",
            type: "selectDropdown",
            label: "Select an author (plain)",
            options: {
                1: "One - test",
                2: "Two - test",
                3: "Three - test",
                4: "Four - test"
            },
            rules: {
                required: true
            }
        }
    ],
    related: [
        {
            slug: "author-rel",
            name: "Author (related)",
            type: "selectDropdown",
            label: "Select an author",
            options: {
                1: "One",
                2: "Two",
                3: "Three",
                4: "Four"
            },
            reference: {
                type: "belongsTo",
                to: "user", // The slug
                on: "_id",
                via: "author_id",
                label: "name",
            }
        }
    ]
}