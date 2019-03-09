$(function () {
    let skip = 100;

    $('#showMore').click(function () {
        $('#showMore').prop("disabled", true);
        $.getJSON(`/logs/more/${skip}`).done(function (logs) {
            skip += 100;
            $('#showMore').prop("disabled", false);

            $.each(logs, function (k, log) {
                $(`<tr>
                    <td scope="row" style="padding: 1px;">${new Date(log.createdAt).toString().slice(4,24)} GMT</td>
                    <td scope="row" style="padding: 1px;">${log.user.username}</td>
                    <td scope="row" style="padding: 1px;">${log.action.length > 120 ? log.action.slice(0,120) + "..." : log.action}</td>
                </tr>`).hide().appendTo('tbody').fadeIn();
            });
        });
    });
});
