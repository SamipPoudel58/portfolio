Re-occuring bugs and their fixes:

1. **Error: Cannot query field "references" on type**
   This generally occurs when richText Fields are used
   _Fix:_ Create "dummy" content in your rich text field hyperlinks. Basically if you use rich text on any of your content model and you plan to hyperlink another content model (eg: an image,file etc.), you need to create samples this for EVERY reference you're trying to query.

2. **Error: "window" is undefined**
   _Fix:_ Gatsby development build slightly differs from the production build as the production build uses server-side rendering, therefore window object is not defined. If window object is used, a workaround for the error would be to use if statement
   ```js
   if (typeof window !== undefined) {
     window.addEventListener("scroll", changeBackground)
   }
   ```
