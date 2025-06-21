# 🎨 Day 2: Introduction to CSS, HTML Tags & Form Elements

> **Training Institute**: Grow Foundation  
> **Trainer**: Jagmohan Rai Sir

---

## 🎯 What We Learned Today

### 1. **Anchor Tag (`<a>`)**

The **anchor tag** is used to create hyperlinks to other pages or resources.

```html
<a href="https://www.example.com">Click here to visit Example</a>
```

- The `href` attribute specifies the destination URL.
- Can be used for internal and external links.

### 2. **Image Tag (`<img>`)**

The **image tag** is used to display images in the webpage.

```html
<img src="image.jpg" alt="Description of Image" width="500" height="300">
```

- The `src` attribute defines the image file path.
- The `alt` attribute provides alternative text for accessibility.
- You can set the image size using `width` and `height`.

### 3. **Video Tag (`<video>`)**

The **video tag** is used to embed videos.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

- The `controls` attribute adds playback controls like play, pause, and volume.
- Can include multiple source formats (e.g., MP4, WebM).

### 4. **Iframe Tag (`<iframe>`)**

The **iframe tag** is used to embed another HTML page within a webpage.

```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

- The `src` attribute specifies the URL of the embedded page.

### 5. **Table Tag (`<table>`)**

The **table tag** is used to create tables in HTML.

```html
<table border="1">
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

- The `<tr>` tag is used for table rows.
- The `<th>` tag is used for table headings.
- The `<td>` tag is used for table data (cells).

### 6. **Form Tag (`<form>`)**

The **form tag** is used to collect user input.

```html
<form action="submit_form.php" method="post">
  Name: <input type="text" name="username">
  Email: <input type="email" name="email">
  <input type="submit" value="Submit">
</form>
```

- The `action` attribute specifies where to send the form data.
- The `method` attribute determines how to send the data (GET or POST).

---

## 🧩 Different Types of Form Elements

1. **Text Input**: `<input type="text">`
2. **Password Input**: `<input type="password">`
3. **Radio Button**: `<input type="radio">`
4. **Checkbox**: `<input type="checkbox">`
5. **Dropdown (Select)**: 
   ```html
   <select>
     <option value="option1">Option 1</option>
     <option value="option2">Option 2</option>
   </select>
   ```
6. **Textarea**: `<textarea></textarea>`
7. **Submit Button**: `<input type="submit">`

---

## 📋 **Tasks for Today**

### Task 1: Simple Table
Create a table with 3 rows and 2 columns displaying your personal information:
- Name
- Age
- Email

### Task 2: Table with Formatting
Create a table with different row and column spans:
- Use `<th>` for headings.
- Add `rowspan` and `colspan` attributes to make the table look dynamic.

### Task 3: Table with Formatting
Create a table with 4 columns displaying data of your choice 

---

## 📌 Summary

Today we covered:
- **Anchor, image, video, iframe** tags
- **Table** creation and usage in HTML
- Introduction to **form elements** for collecting user input
- Practical tasks to implement tables in different formats

> _"The beauty of HTML lies in its simplicity. The beauty of CSS lies in how you can make it shine."_  
> — **Jagmohan Rai Sir**


