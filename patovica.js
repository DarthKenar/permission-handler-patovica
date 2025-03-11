var ALL = "all_permissions";
var ROLES = {
    ADMIN: [ALL]
};
var Patovica = /** @class */ (function () {
    function Patovica(config) {
        this.ROLES = config;
    }
    Patovica.prototype.hasPermission = function (user, permission) {
        return (this.ROLES[user.role].includes(permission) ||
            this.ROLES[user.role].includes("all_permissions"));
    };
    return Patovica;
}());
// Uso de la clase
var patovica = new Patovica({
    ADMIN: [ALL],
    TURISMO: ["view:comments"]
});
var user = { id: 1, role: "TURISMO" };
console.log(patovica.hasPermission(user, '')); // true
