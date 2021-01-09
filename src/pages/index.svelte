<script>
    import { metatags } from '@roxi/routify'
    import models from "../models";

    // import Model from "../lib/database/model/Model";
    // import User from "../models/User";
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'

    let user = new models.user;

    // console.log('models', models);

    user.create();
    user.update();
    user.delete();
    // console.log(models.User.collection);

</script>

<div>
    test
</div>