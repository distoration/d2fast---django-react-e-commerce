// LIBRARIES
import { Container } from 'react-bootstrap'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


// IMPORTANT COMPONENTS
import Header from './elements/Header'
import Footer from './elements/Footer'
import Mainscreen from './displays/Mainscreen'
import ProductScreen from './displays/ProductScreen'
import CartScreen from './displays/CartScreen'    
import LoginScreen from './displays/LoginScreen'
import RegisterScreen from './displays/RegisterScreen'
import ProfileScreen from './displays/ProfileScreen'
import ShippingScreen from './displays/ShippingScreen'
import PaymentScreen from './displays/PaymentScreen'
import PlaceOrderScreen from './displays/PlaceOrderScreen'
import OrderScreen from './displays/OrderScreen'
import UserListScreen from './displays/UserListScreen'
import UserEditScreen from './displays/UserEditScreen'
import ProductListScreen from './displays/ProductListScreen'
import ProductEditScreen from './displays/ProductEditScreen'
import OrderListScreen from './displays/OrderListScreen'
import Contact from './displays/Contact'
import Faq from './displays/Faq'
import AboutUs from './displays/AboutUs'
import Rules from './displays/Rules'
import Cooperation from './displays/Cooperation'
import Gifts from './displays/Gifts'
import Shipment from './displays/Shipment'
import RegisterDone from './displays/RegisterDone'
import YourAccountIsActive from './displays/YourAccountIsActive'
import PasswordReset from './displays/PasswordReset'


// CATEGORIES
import Ladder from './displays/Ladder'
import NonLadder from './displays/NonLadder'
import Hardcore from './displays/Hardcore'


// ITEMS
import AmuletsLD from './elements/items/ladder/AmuletsLD'
import ArmorsLD from './elements/items/ladder/ArmorsLD'
import BeltsLD from './elements/items/ladder/BeltsLD'
import BootsLD from './elements/items/ladder/BootsLD'
import CharmsLD from './elements/items/ladder/CharmsLD'
import FullGearPacksLD from './elements/items/ladder/FullGearPacksLD'
import GlovesLD from './elements/items/ladder/GlovesLD'
import HelmsLD from './elements/items/ladder/HelmsLD'
import JewelsLD from './elements/items/ladder/JewelsLD'
import KeysOrgansLD from './elements/items/ladder/KeysOrgansLD'
import RingsLD from './elements/items/ladder/RingsLD'
import RunesLD from './elements/items/ladder/RunesLD'
import RuneWordsLD from './elements/items/ladder/RuneWordsLD'
import SetItemsLD from './elements/items/ladder/SetItemsLD'
import ShieldsLD from './elements/items/ladder/ShieldsLD'
import SocketableBasesLD from './elements/items/ladder/SocketableBasesLD'
import WeaponsLD from './elements/items/ladder/WeaponsLD'
import FullMercenaryGearLD from'./elements/items/ladder/FullMercenaryGearLD'

// LADDER RUNE WORDS CATEGORY
import RuneArmorLD from './elements/items/ladder/RuneWordsLDFolder/RuneArmorLD'
import RuneHelmsLD from './elements/items/ladder/RuneWordsLDFolder/RuneHelmsLD'
import RuneShieldsLD from './elements/items/ladder/RuneWordsLDFolder/RuneShieldsLD'
import RuneWeaponsLD from './elements/items/ladder/RuneWordsLDFolder/RuneWeaponsLD'


// APPLICATION 
function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className="py-3">
        <Container>
          <Routes>
            {" "}
            <Route exact path='/' element={<Mainscreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route exact path='/register' element={<RegisterScreen />} />
            <Route exact path='/profile' element={<ProfileScreen />} />
            <Route exact path='/shipping' element={<ShippingScreen />} />
            <Route exact path='/placeorder' element={<PlaceOrderScreen />} />
            <Route exact path='/order/:id' element={<OrderScreen />} />


            <Route exact path='/payment' element={<PaymentScreen />} />
            <Route exact path='/faq' element={<Faq />} />
            <Route exact path='/ofirmie' element={<AboutUs />} />




            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart/' element={<CartScreen />} />

            <Route path='/contact' element={<Contact />} />



            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />

            <Route path='/admin/productlist' element={<ProductListScreen />} />
            <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />

            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            <Route path='/conditions-of-use' element={<Rules />} />
            <Route path='/vip-customers' element={<Cooperation />} />
            <Route path='/privacy-policy' element={<Gifts />} />
            <Route path='/delivery-faq' element={<Shipment />} />
            <Route path='/register-done-confirm-a-link' element={<RegisterDone />} />
            <Route path='/your-account-is-active' element={<YourAccountIsActive />} />
            <Route path='/password-reset' element={<PasswordReset />} />



            

            
            <Route path='/d2r-ladder-items' element={<Ladder />} />
            <Route path='/d2r-non-ladder-items' element={<NonLadder />} />
            <Route path='/d2r-hardcore-items' element={<Hardcore />} />


            <Route path='/d2r-ladder-items/amulets-ladder' element={<AmuletsLD />} />
            <Route path='/d2r-ladder-items/armors-ladder' element={<ArmorsLD />} />
            <Route path='/d2r-ladder-items/belts-ladder' element={<BeltsLD />} />
            <Route path='/d2r-ladder-items/boots-ladder' element={<BootsLD />} />
            <Route path='/d2r-ladder-items/charms-ladder' element={<CharmsLD />} />
            <Route path='/d2r-ladder-items/full-gears-ladder' element={<FullGearPacksLD />} />
            <Route path='/d2r-ladder-items/gloves-ladder' element={<GlovesLD />} />
            <Route path='/d2r-ladder-items/helms-ladder' element={<HelmsLD />} />
            <Route path='/d2r-ladder-items/jewels-ladder' element={<JewelsLD />} />
            <Route path='/d2r-ladder-items/keys-organs-ladder' element={<KeysOrgansLD />} />
            <Route path='/d2r-ladder-items/rings-ladder' element={<RingsLD />} />
            <Route path='/d2r-ladder-items/runes-ladder' element={<RunesLD />} />
            <Route path='/d2r-ladder-items/runewords-ladder' element={<RuneWordsLD />} />
            <Route path='/d2r-ladder-items/set-items-ladder' element={<SetItemsLD />} />
            <Route path='/d2r-ladder-items/shields-ladder' element={<ShieldsLD />} />
            <Route path='/d2r-ladder-items/socketable-bases-ladder' element={<SocketableBasesLD />} />
            <Route path='/d2r-ladder-items/weapons-ladder' element={<WeaponsLD />} />
            <Route path='/d2r-ladder-items/full-mercenary-gear' element={<FullMercenaryGearLD />} />



            <Route path='/d2r-ladder-items/runewords-ladder/runewords-armors/' element={<RuneArmorLD />} />
            <Route path='/d2r-ladder-items/runewords-ladder/runewords-helms' element={<RuneHelmsLD />} />
            <Route path='/d2r-ladder-items/runewords-ladder/runewords-shields' element={<RuneShieldsLD />} />
            <Route path='/d2r-ladder-items/runewords-ladder/runewords-weapons' element={<RuneWeaponsLD />} />












[]





          </Routes>
        </Container>
    </main>
    <Footer />
  </BrowserRouter>

  );
}

export default App;
