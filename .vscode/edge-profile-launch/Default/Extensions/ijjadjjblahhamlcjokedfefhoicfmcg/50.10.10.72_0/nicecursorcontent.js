let switchStatus, cursors_style_code, dSrc, pSrc, default_curSize, pointer_curSize, pach = "chrome-extension://" + chrome.runtime.id + "/",
local_values = ["switch_status", "default_cursor", "pointer_cursor", "default_curSize", "default_cursor_result", "pointer_cursor_result", "pointer_curSize", "curSelected", "css_elm"],
cursorADD = "html,body,",
pointerADD = 'a,input[type="submit"],input[type="image"],label[for],select,button,[role="button"],.pointer,';
cur_storage = chrome.storage.local;

nicecursorstyleManager = function(e) {
    var check_popup_page = document.body.contains(document.getElementById("use_system_cursors"));
    cur_storage.get(local_values, function(data) {
        var default_curSize = data.default_curSize;
        var pointer_curSize = data.pointer_curSize;
        var dSrc = data.default_cursor_result;
        var pSrc = data.pointer_cursor_result;
        var switch_status = data.switch_status;
        var cssElm = data.css_elm;
        if (switch_status == "false") {
            cursors_style_code = "";
            cssElm.innerHTML = "";
            document.querySelectorAll('[cursors="cursors_style_code"]').forEach(el => el.remove());
        }
        if (e === "create" && switch_status == "true") {
            let t = "";
            if (typeof dSrc !== "undefined" && dSrc.length > 0) t = t + cursorADD + ".mc_default { cursor: url(" + dSrc + "), default !important; } ";
            if (typeof pSrc !== "undefined" && pSrc.length > 0) t = t + pointerADD + ".mc_pointer { cursor: url(" + pSrc + "), pointer !important; } ";
            if (!check_popup_page) {
                if (typeof cursors_style_code !== "undefined" && cursors_style_code == t) {
                    cssElm.innerHTML = t;
                } else {
                    document.querySelectorAll('[cursors="cursors_style_code"]').forEach(el => el.remove());
                    cursors_style_code = t;
                    cssElm = document.createElement("style");
                    cssElm.rel = "stylesheet";
                    cssElm.setAttribute("cursors", "cursors_style_code");
                    cssElm.innerHTML = t;
                    document.head.appendChild(cssElm);
                }
            }
        }
        if (e === "remove") cssElm.innerHTML = "";

        cur_storage.set({
            css_elm: cssElm
        });
    });
}

function nicecursorManager(e) {
    if (typeof e === "Element") {
        let t = getComputedStyle(e).cursor;
        if ("pointer" === t || "default" === t || "auto" === t) {
            "auto" === t && (t = "default");
            let n = e.classList,
                o = e.nodeName,
                c = e.style.cursor;
            if (0 !== n.length && "" === c) {
                let e = o;
                for (let t = 0; t < n.length; t++) e += "." + n[t];
                "default" === t ? cursorADD += e + "," : pointerADD += e + ",", nicecursorstyleManager("create")
            } else n.contains("mc_" + t) || n.add("mc_" + t)
        }
    }
}

let nicecursorElement = function(e) {
    try {
        nicecursorManager(document.elementFromPoint(e.clientX, e.clientY)), nicecursorManager(document.elementFromPoint(e.clientX + 10, e.clientY + 10)), nicecursorManager(document.elementFromPoint(e.clientX - 10, e.clientY - 10));
    } catch (e) {}
}

cursors_launch = function() {
    nicecursorstyleManager("create");
    document.addEventListener("mousemove", nicecursorElement);
}

chrome.storage.onChanged.addListener(function(e, t) {
    cursors_launch();
}), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", cursors_launch) : cursors_launch();
