const get_req = () => {
  try {
    $.get("http://localhost:3000/router", data => {
      $("#return_msg").html(data);
    });
    console.log("[success] get request");
  } catch (e) {
    console.log("[failed] get request: " + e);
  } finally {
  }
};

const pos_req = () => {
  try {
    $.post("http://localhost:3000/router", data => {
      $("#return_msg").html(data);
    });
    console.log("[success] post request");
  } catch (e) {
    console.log("[failed] post request: " + e);
  } finally {
  }
};

const put_req = () => {
  try {
    $.ajax({
      url: "http://localhost:3000/router",
      type: "PUT",
      success: data => {
        $("#return_msg").html(data);
      }
    });
    console.log("[success] put request");
  } catch (e) {
    console.log("[failed] put request: " + e);
  } finally {
  }
};

const del_req = () => {
  try {
    $.ajax({
      url: "http://localhost:3000/router",
      type: "DELETE",
      success: data => {
        $("#return_msg").html(data);
      }
    });
    console.log("[success] delete request");
  } catch (e) {
    console.log("[failed] delete request: " + e);
  } finally {
  }
};
