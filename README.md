# Pagination
An example of pagination in Javascript with test unis in QUnit. 
The goal is to paginate number of pages minding a current page, total of pages, boundaries and neighbour pages of the current page (around).

# Files
## Pagination.js

This is where the calculation of pagination goes. Here you can find the function **paginate(currentPage, totalPages, boundaries, around)**  and subsequent validations that output the pagination results.

| Arguments      |Description            	     |Data Element                  |
|----------------|-------------------------------|----------------|
|currentPage	 |Current Page / Selected Page.  |Number          |
|totalPages      |Total number of Pages.         |Number          |
|boundaries      |Boundaries of Pages / Limit of Pages|Number	  |
|around 		 |Neighbour Pages of Current Page|Number 		  |

## Tests.Html

For the tests, QUnit was chosen as test runner, executing them in an html file.
To run the existing tests, please open the file tests.html in a browser.

