function isAround(index, currentPage, around) {
    return index >= (currentPage - around) && index <= (currentPage + around) ? true : false;
}

function isBoundary(index, totalPages, boundaries) {
    return index <= boundaries || (index >= (totalPages - (boundaries - 1)) && index <= totalPages) ? true : false;
}

function isNegative(number) {
    return number < 0 ? true : false;
}

function isNotaNumber(number) {
    return isNaN(number) ? true : false;
}

function paginate(currentPage, totalPages, boundaries, around) {
    var pagination = "";

    if (isNegative(currentPage) || isNegative(totalPages) || isNegative(boundaries) || isNegative(around)) {
        throw Error("Por favor insira um número positivo");
    }

    if (isNotaNumber(currentPage) || isNotaNumber(totalPages) || isNotaNumber(boundaries) || isNotaNumber(around)) {
        throw Error("Por favor insira um número");
    }

    for (var i = 1; i <= totalPages; i++) {
        if (i == currentPage || isAround(i, currentPage, around) || isBoundary(i, totalPages, boundaries)) {
            pagination += " " + i;
        }
        else if (!(isNaN(pagination[pagination.length - 1])) || pagination === "") {
            pagination += " ...";
        }
    }
    pagination = pagination.slice(1, pagination.length);
    console.log(pagination);

    return pagination;
}
