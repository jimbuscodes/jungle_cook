// function to change page
export function changePage(pageName) {
  const page = pageName === "" ? "home" : pageName;

  $.get(`pages/${page}.html`, (data) => {
    $("#app").html(data);
  });
}
