export const android_Intent = {
    youtubeSource: "https://www.youtube.com/embed/VecnjLDaNqk",
    title: "Working With Android Intents",
    sections: [
      {
        type: "section",
        contents: [
          {
            type: "paragraph",
            content: 'In the previous Tutorial, we have learned how an intent works. Here we will use intent to go to another activity and fetch data from second Activity and get the result and display in the first activity as show in picture'
          },
          {
            type: "h3",
            content: "Creating Project"
          },
          {
            type: "paragraph",
            content:
              "SharedPreferences are used for storing the User Preferences. Application settings and other lightweight operations which are stored as a key-value pair."
          },
          {
            type: "h2",
            content: "Steps to create SqliteDb: "
          },
          {
            type: "steps",
            steps: [
              "1. Create a Table.",
              "2. Name the table and define names and data types of the columns. ",
              "3. create the database using the SQLiteOpenHelper."
            ]
          },
          {
            type: "h2",
            content: "Implementing SqliteOpenHelper"
          },
          {
            type: "steps",
            steps: [
              "1. Create a class, and that extends SQliteOpenHelper ",
              "2. Create constants for database name and database version.",
              "3. Create a constructor. ",
              "4. Implementing onCreate and onUpgrade methods."
            ]
          }
        ]
      },
      {
        type: "section",
        contents: [
          {
            type: "h3",
            content: "What does SQLiteOpenHelper Class do?"
          },
          {
            type: "paragraph",
            content:
              "SQLite database uses SQLiteOpenHelper which assists with creating or upgrading the database."
          },
          {
            type: "paragraph",
            content:
              "We need to create a custom subclass of sqliteHelper implementing the following."
          },
          {
            type: "h2",
            content: "The Adapter requires us to override three methods: "
          },
          {
            type: "h3-pre",
            content: "1. OncreateViewHolder:"
          },
          {
            type: "paragraph",
            content: `We will return a viewHoler object here. We inflate our itemviews using a layoutinflater. Its inflate method takes in the id's of a layout in XML. It inflates or converts this into a collection of views groups and views that represent a java code.
              The last parameter in OncreateViewHolder() method is set to false so that the inflated layout isn't attached to parent group immediately.`
          },
          {
            type: "h3-pre",
            content: "2. OnbindViewHolder(): "
          },
          {
            type: "paragraph",
            content:
              "Called to fetch appropriate data at the specified position. This method should update the contents of the itemviews to reflect the items at given position."
          },
          {
            type: "h3-pre",
            content: "3. getitemcount(): "
          },
          {
            type: "paragraph",
            content: "Returns no of items in our data."
          },
          {
            type: "h2",
            content: "So Adapter is responsible for:  "
          },
          {
            type: "para-steps",
            steps: [
              "<b>1.</b> Creating a viewHolder object for each Recyclerview item",
              "<b>2.</b> Returning the no of items in the data source.",
              "<b>3.</b> Binding data from data source to each item.",
              "<b>4.</b> Inflating each itemview that will be displayed.",
              `<b>Note : </b> the adapter does create viewHolder objects and inflates item vies in its oncrateviewholder function. It also returns the no of items in the data source and binds data from data source to each item. It doesn't cache view associated with each item (caching is done by viewHoder).`
            ]
          }
        ]
      },
      {
          type: "image",
          src: "content-provider-interaction.png"
      }
    ]
  };
  