# Pagination
An example of pagination in **Javascript** complemented with unit tests in **QUnit**. 
The goal is to paginate a number of pages minding a selected page, total of pages, boundaries and neighbour pages of the current page (around).

# Files
## Pagination.js

This is where the calculation of pagination goes. Here you can find the function **paginate(currentPage, totalPages, boundaries, around)**  and subsequent validations that output the pagination results.

| Arguments      |Description            	     |Data Element                  |
|----------------|-------------------------------|----------------|
|currentPage	 |Current Page / Selected Page.  |Number          |
|totalPages      |Total number of Pages.         |Number          |
|boundaries      |Boundaries of Pages / Limit of Pages|Number	  |
|around 		 |Neighbour Pages of Current Page|Number 		  |

## Tests.html

For the tests, **QUnit** was chosen as test runner, executing them in an HTML file.
To run the existing tests, please run the file tests.html in a browser.

 - The existing tests can be found at **tests/pagination.test.js**.

# Usage

 ### Import the following scripts:
 ```html
 <script  src="src/pagination.js"></script>
```

 ### Assign the function result to the text element 
 ```html
<p id="txtNav"><\p>

 <script>
	document.getElementById("txtNav").innerHTML = paginate(4,10,2,2);
</script>
```

#### Output 
```1 2 3 4 5 6 ... 9 10```

## Demo
You can use the demo.html, inside the folder demo, to check the output and try new tests.
