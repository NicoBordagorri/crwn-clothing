import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {HeaderComponent,LogoContainer,OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser,hidden}) => (
    <HeaderComponent>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>

            {
            currentUser ?
            <OptionLink as='div' onClick={()=> auth.signOut()} >SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>
                SIGN IN
            </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </HeaderComponent>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)