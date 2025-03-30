const asyncHandler = (fn) => (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: error.message,
        });
        
    }
}
export default asyncHandler