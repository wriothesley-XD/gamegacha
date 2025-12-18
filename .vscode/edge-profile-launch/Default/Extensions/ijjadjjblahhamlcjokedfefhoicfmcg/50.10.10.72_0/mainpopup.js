
cur_storage.get(local_values, function(data) {
    var switch_status = data.switch_status;
    if (typeof switch_status !== "undefined" && switch_status == "true") {
        $(".activate_block").removeClass("disabled");
        $(".activate_block").addClass("enabled");
        $(".extension_sts").html("Cursor Is ON");
        setCursor();
    } else {
        $(".activate_block").removeClass("enabled");
        $(".activate_block").addClass("disabled");
        $(".extension_sts").html("Cursor Is OFF");
        setCursor();
    }
});

function setCursor() {
    cur_storage.get(local_values, function(data) {
        var default_cursor = data.default_cursor;
        var pointer_cursor = data.pointer_cursor;
        var default_curSize = data.default_curSize;
        var pointer_curSize = data.pointer_curSize;
        if (typeof default_cursor === "undefined" || default_cursor.length == 0) {
            default_cursor = "default/default.png";
            cur_storage.set({
                default_cursor_result: ""
            });
        } else {
            let canvas = document.createElement("canvas");
            canvas.height = default_curSize, canvas.width = default_curSize;
            let u_img = document.createElement("img");
            u_img.src = pach + "/" + default_cursor;
            u_img.onload = function() {
                let e_2d = canvas.getContext("2d");
                e_2d.imageSmoothingQuality = "high";
                e_2d.drawImage(u_img, 0, 0, default_curSize, default_curSize);
                let default_cursor_res = canvas.toDataURL();
                cur_storage.set({
                    default_cursor_result: default_cursor_res
                });
            }
        }
        if (typeof pointer_cursor === "undefined" || pointer_cursor.length == 0) {
            pointer_cursor = "default/pointer.png";
            cur_storage.set({
                pointer_cursor_result: ""
            });
        } else {
            let canvas = document.createElement("canvas");
            canvas.height = pointer_curSize, canvas.width = pointer_curSize;
            let u_img = document.createElement("img");
            u_img.src = pach + "/" + pointer_cursor;
            u_img.onload = function() {
                var e_2d = canvas.getContext("2d");
                e_2d.imageSmoothingQuality = "high", e_2d.drawImage(u_img, 0, 0, pointer_curSize, pointer_curSize);
                pointer_cursor_res = canvas.toDataURL();
                cur_storage.set({
                    pointer_cursor_result: pointer_cursor_res
                });
            }
        }
        var cur_type = $(".selector_btn.select").attr("data-type");
        if (cur_type == 'default') {
            $(".cursor_installed").attr("src", pach + "/" + default_cursor);
            $(".choose_cursor_size").removeClass("cursor_size_active");
            $(".choose_cursor_size[data-value='" + default_curSize + "']").addClass("cursor_size_active");
        }
        if (cur_type == 'pointer') {
            $(".cursor_installed").attr("src", pach + "/" + pointer_cursor);
            $(".choose_cursor_size").removeClass("cursor_size_active");
            $(".choose_cursor_size[data-value='" + pointer_curSize + "']").addClass("cursor_size_active");
        }
    });
}

document.addEventListener("click", function(e) {
    if ("cur_click" === e.target.dataset.action) {
        cur_storage.get(local_values, function(data) {
            var curSelected = data.curSelected;
            var cursor_path = e.target.dataset.pach;
            if (curSelected == 'default') {
                cur_storage.set({
                    default_cursor: cursor_path,
                });
                setCursor();
            }
            if (curSelected == 'pointer') {
                cur_storage.set({
                    pointer_cursor: cursor_path
                });

                setCursor();
            }
        });
    }
});

$(".selector_btn").on('click', function() {
    var type = $(this).attr("data-type");
    if (typeof type !== "undefined" && type == "default") {
        $(".selector_btn").removeClass("select");
        $(".selector_btn[data-type='" + type + "']").addClass("select");
        cur_storage.set({
            curSelected: type
        });
        $("#cursorType").html("Default");

        setCursor();
    }
    if (typeof type !== "undefined" && type == "pointer") {
        $(".selector_btn").removeClass("select");
        $(".selector_btn[data-type='" + type + "']").addClass("select");
        cur_storage.set({
            curSelected: type
        });
        $("#cursorType").html("Pointer");

        setCursor();
    }
});
$(".activate_block").on('click', function() {
    if ($(".activate_block").hasClass("enabled")) {
        $(".activate_block").removeClass("enabled");
        $(".activate_block").addClass("disabled");
        $(".extension_sts").html("Cursor Is OFF");
        cur_storage.set({
            switch_status: "false"
        });
    } else {
        $(".activate_block").removeClass("disabled");
        $(".activate_block").addClass("enabled");
        $(".extension_sts").html("Cursor Is ON");
        cur_storage.set({
            switch_status: "true"
        });
    }
    console.log('CLicked')
});
$(".choose_cursor_size").on('click', function() {
    var size = $(this).html();
    $(".choose_cursor_size").removeClass("cursor_size_active"); 
    $(this).addClass("cursor_size_active");
    
    var cur_type = $(".selector_btn.select").attr("data-type");
    if (cur_type == 'default') {
        cur_storage.set({
            default_curSize: size
        });
    }
    if (cur_type == 'pointer') {
        cur_storage.set({
            pointer_curSize: size
        });
    }
    setCursor();
});
$(".reset_cursors").on('click', function(e) {
    e.preventDefault();
    cur_storage.set({
        default_cursor: "",
        pointer_cursor: "",
        default_curSize: "48",
        pointer_curSize: "48"
    });
    setCursor();
});