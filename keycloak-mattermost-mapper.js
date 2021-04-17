# take the first three elements of the id and convert them to int (in base 36)
var str_id_first = String(parseInt(user.getId().slice(0,3),36));
# take the creation time in epoch time (in milliseconds)
var str_id_last = String(user.getCreatedTimestamp())
# concatenate the two
var str_id = str_id_first + str_id_last;
# export the variable
exports = str_id;
