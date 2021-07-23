exports.booking = async (req, res) => {
  const { name, email, phone, guest, date, number } = req.body;
  if (name && email && phone && guest && date && number) {
    if (number % 2 == 0) {
      return res.send({
        status: 1,
        message:
          "میز شما با موفقیت رزرو شد همکاران ما تا یک ساعت دیگر باشما تماس خواهند گرفت برای هماهنگی بیشتر",
        success: true,
      });
    } else {
      return res.send({
        status: 1,
        message:
          "باعرض پوزش میز خالی وجود ندارد همکاران ما باشما تماس می گیرند",
        success: false,
      });
    }
  } else {
    return res.send({
      status: 1,
      message: "در خواست شما با مشکا مواجه شد",
    });
  }
};
