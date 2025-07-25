const payerURLPayment = async () => {
  const publicKey = "cee29cfbc6832e64bdd52a577d33569a"; // المفتاح العام من حسابك على payerurl
  const payload = {
    order_id: "ORDER123",
    amount: "10", // المبلغ بالدولار
    currency: "USD",
    billing_email: "customer@example.com",
    redirect_to: "https://your-site.com/success",
    notify_url: "https://your-site.com/webhook",
    type: "crypto",
    items: [
      {
        name: "منتج رقمي 1",
        quantity: 1,
        price: "10",
      },
    ],
  };

  try {
    const response = await fetch("https://dashboard.payerurl.com/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${publicKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);

    if (data?.data?.url) {
      window.location.href = data.data.url; // إعادة توجيه المستخدم لبوابة الدفع
    } else {
      console.error("لم يتم إرجاع رابط الدفع", data);
    }
  } catch (error) {
    console.error("حدث خطأ أثناء إرسال الدفع:", error);
  }
};
payerURLPayment();
