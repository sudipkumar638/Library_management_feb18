var bookname = document.getElementById("book-name");
var issueto = document.getElementById("issued-to");

var submitbutton = document.getElementById("submitbook")
var updatebookstatus = document.getElementById("updatestatus")

function datetimerformatter(data) {
    const arr = data.split(",");
    const time = arr[1].split(":");
    if (parseInt(time[0]) >= 12) {
        const tval = parseInt(time[0]) == 12 ? "12" : time[0] % 12
        return arr[0] + "  at " + tval + ":" + time[1] + " PM";
    }
    else {
        return arr[0] + "  at " + time[0] + ":" + time[1] + " AM";
    }
}



var bookarr = [];
function updatestatus(data) {
    const value = bookarr.map((item, ind) => {
        if (item.id == data && item.status == "not returned") {

            item.status = "returned";
            return item;
        }
        else if (item.id == data && item.status == "returned") {
            item.status = "not returned"
            return item;
        }
        else {
            return item
        }
    })


    document.getElementById("hello").innerHTML = value.map((item, ind) => {
        return (`<tr>
        <td>${item?.id}</td>
        <td>${item?.book_name}</td>
        <td>${item?.issued_to}</td>
        <td >${item?.issued_time}</td>
        <td class=${item?.status == "returned" ? "returned" : "nreturned"}>${item?.status} <i  id=${item?.id} onclick="updatestatus(this.id)"   class="fa-solid fa-pen-to-square updateicon"></i></td>
      </tr>`)
    }).join("")


}


submitbutton.addEventListener("click", () => {

    let bookcount = bookarr.length + 1;
    const book = { id: bookcount, book_name: bookname.value, issued_to: issueto.value, issued_time: datetimerformatter(new Date().toLocaleString()), status: "not returned" }
    bookarr.push(book)



    document.getElementById("hello").innerHTML = bookarr.map((book, ind) => {
        return (`<tr>
        <td>${book?.id}</td>
        <td>${book?.book_name}</td>
        <td>${book?.issued_to}</td>
        <td >${book?.issued_time}</td>
        <td class="nreturned">${book?.status} <i  id=${book?.id} onclick="updatestatus(this.id)"   class="fa-solid fa-pen-to-square updateicon"></i></td>
      </tr>`)
    }).join("")

})









