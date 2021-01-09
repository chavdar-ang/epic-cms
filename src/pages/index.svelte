<script>
    import { metatags } from '@roxi/routify'

    import Model from "../lib/database/model/Model";
    import User from "../models/User";
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'

    let model = new Model;
    let user = new User;

    user.create();
    user.update();
    user.delete();
    console.log(User.collection);

</script>

<div>
    test
</div>