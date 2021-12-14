import express from "express";
 
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import {auth, getAllUsers, register, login, getLogin, updatePassword } from "../controllers/Users.js";
import {checkUserEntry, oldStockEntries, yahooRealTime, userStockList, addStockEntry, getHistorical} from "../controllers/Stocks.js";
import { getEarningCalendar, getIPOCalendar, getListingStatus, getMarketHolidays, getTrendingTickers } from "../controllers/Static.js";
import validateToken from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// Static Routes
router.get('/ListingStatus', getListingStatus);
router.get('/earningCalendar', getEarningCalendar); 
router.get('/ipoCalendar', getIPOCalendar);
router.get('/marketHolidays', getMarketHolidays); 
router.get('/trendingTickers', getTrendingTickers);

// Stock Routes
//router.get('/', getAllUsers);
router.get('/checkUserEntry', checkUserEntry);
router.get('/oldStockEntries', oldStockEntries);
router.get('/yahooRealTime', yahooRealTime); 
router.get('/:id/stocklist', userStockList); 
router.post('/entry/ticker', addStockEntry);
router.get('/stock/:symbol', getHistorical); 

// User Routes
router.get('/auth', auth, validateToken);
router.post('/login', login);
router.get('/login', getLogin); 
router.post('/register', register); 
router.put('/setting', updatePassword, validateToken);
//router.get('/test', test);
//router.get('/realtime', getRealTime); 
//router.get('/', getAllProducts);
//router.get('/:id', getProductById);
//router.post('/', createProduct);
//router.patch('/:id', updateProduct);
//router.delete('/:id', deleteProduct);
 
export default router;
