import Cookies from 'universal-cookie';
class Role {

    static getUserId() {
        var cookie = new Cookies();
        return cookie.get('id_user');
    }


}

export default Role;