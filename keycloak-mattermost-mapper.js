var str_id_first = String(parseInt(user.getId().slice(0,3),36));
var str_id_last = String(user.getCreatedTimestamp())
var str_id = str_id_first + str_id_last;
exports = str_id;
