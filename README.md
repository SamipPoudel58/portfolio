Re-occuring bugs and their fixes:

1. **Error: Cannot query field "references" on type**
   _Fix:_ Create "dummy" content in your rich text field hyperlinks. Basically if you use rich text on any of your content model and you plan to hyperlink another content model (eg: an image,file etc.), you need to create samples this for EVERY reference you're trying to query.
