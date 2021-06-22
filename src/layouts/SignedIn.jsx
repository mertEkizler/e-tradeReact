import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp3.licdn.com/dms/image/C4E03AQEvBGh1zziE0Q/profile-displayphoto-shrink_200_200/0/1616496379509?e=1629331200&v=beta&t=CavVhK7BZZ-vlreB85sdss-n8zR0Z7sPlQ5WQtC5KJQ"/>
                <Dropdown pointing="top left" text="Mert">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
