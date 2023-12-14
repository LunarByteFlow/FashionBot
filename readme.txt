Routing routes code:


import { Route,Routes, } from "react-router-dom";


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<BlogApp />} />
        <Route path="/users/*" element={<UserApp />} />
    </Routes>


ACCOUNTS:
admin, boutique, guest, user

COMMANDS I USED TO DOWNLOAD EXTRAS:
npm install js-cookies
npm add sass