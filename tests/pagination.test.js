QUnit.test("Paginate Basics", function (assert) {
    assert.equal(paginate(1, 2, 3, 4), "1 2");
    assert.equal(paginate(1, 10, 1, 1), "1 2 ... 10");
    assert.equal(paginate(1, 5, 1, 1), "1 2 ... 5");
    assert.equal(paginate(4, 5, 1, 0), "1 ... 4 5");
    assert.equal(paginate(4, 10, 2, 2), "1 2 3 4 5 6 ... 9 10");
    assert.equal(paginate(4, 10, 0, 0), "... 4 ...");
    assert.equal(paginate(3, 5, 0, 1), "... 2 3 4 ...");
});
QUnit.test("Paginate Basics: Current Page Greater than Total of Pages", function (assert) {
    assert.equal(paginate(9, 5, 0, 1), "...");
});
QUnit.test("Paginate Negatives: Current Page", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(-1, 2, 3, 4); },
        function (err) { return err.message === "Please insert a number equal or bigger than zero" },
        "Error thrown"
    );
});
QUnit.test("Paginate Negatives: Total Pages", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(1, -10, 3, 4); },
        function (err) { return err.message === "Please insert a number equal or bigger than zero" },
        "Error thrown"
    );
});
QUnit.test("Paginate Negatives: Boundaries", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(4, 8, -3, 1); },
        function (err) { return err.message === "Please insert a number equal or bigger than zero" },
        "Error thrown"
    );
});

QUnit.test("Paginate Negatives: Boundaries", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(4, 8, -3, 1); },
        function (err) { return err.message === "Please insert a number equal or bigger than zero" },
        "Error thrown"
    );
});

QUnit.test("Paginate Negatives: Around", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(4, 8, 0, -1); },
        function (err) { return err.message === "Please insert a number equal or bigger than zero" },
        "Error thrown"
    );
});

QUnit.test("Paginate with Letters: Current Page", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate("a", 2, 3, 4); },
        function (err) { return err.message === "Please insert a number" },
        "Error thrown"
    );
});

QUnit.test("Paginate with Letters: Total Pages", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(1, "a", 3, 4); },
        function (err) { return err.message === "Please insert a number" },
        "Error thrown"
    );
});
QUnit.test("Paginate with Letters: Boundaries", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(1, 10, "a", 4); },
        function (err) { return err.message === "Please insert a number" },
        "Error thrown"
    );
});

QUnit.test("Paginate with Letters: Around", function (assert) {
    assert.expect(1);
    assert.throws(
        function () { paginate(1, 10, 9, "a"); },
        function (err) { return err.message === "Please insert a number" },
        "Error thrown"
    );
});