import calendar from "./date";

const isMobileScreen = () => {
  const mobile = window.matchMedia("(max-width: 768px)");

  if (mobile.matches) {
    return true;
  } else {
    return false;
  }
};

const setStatus = (invoiceStatus, wrap, dot, status) => {
  if (invoiceStatus === "paid") {
    wrap("invoice__status-wrap_type_paid");
    dot("invoice__status-dot_type_paid");
    status("invoice__status_type_paid");
  } else if (invoiceStatus === "pending") {
    wrap("invoice__status-wrap_type_pending");
    dot("invoice__status-dot_type_pending");
    status("invoice__status_type_pending");
  } else {
    wrap("invoice__status-wrap_type_draft");
    dot("invoice__status-dot_type_draft");
    status("invoice__status_type_draft");
  }
};

const filter = (invoices, filterType) => {
  if (filterType.draft) {
    return invoices.filter((invoice) => invoice.status === "draft");
  } else if (filterType.paid) {
    return invoices.filter((invoice) => invoice.status === "paid");
  } else if (filterType.pending) {
    return invoices.filter((invoice) => invoice.status === "pending");
  } else {
    return invoices;
  }
};

const check = (e, filterType, setFilterType) => {
  const type = e.target.parentElement.querySelector(
    ".invoices__filter-name"
  ).textContent;

  if (type === "Draft") {
    setFilterType({
      draft: !filterType.draft,
      paid: false,
      pending: false,
    });
  } else if (type === "Paid") {
    setFilterType({
      draft: false,
      paid: !filterType.paid,
      pending: false,
    });
  } else {
    setFilterType({
      draft: false,
      paid: false,
      pending: !filterType.pending,
    });
  }
};

const fillTerms = (terms, setTerms) => {
  const termsList = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];
  if (terms === 1) {
    setTerms(termsList[0]);
  } else if (terms === 7) {
    setTerms(termsList[1]);
  } else if (terms === 14) {
    setTerms(termsList[2]);
  } else {
    setTerms(termsList[3]);
  }
};

const calculateTotal = (arr) => {
  const total = arr
    .map((item) => Number(item.total))
    .reduce((acc, total) => acc + total, 0);

  return total;
};

const newInvoice = (
  invoice,
  values,
  isNew,
  popupItemsFields,
  paymentTerms,
  paymentDue
) => {
  if (isNew) {
    return {
      createdAt: calendar.getTodaysDate(),
      clientAddress: {
        street: values.clientStreet,
        city: values.clientCity,
        postCode: values.clientPostCode,
        coutry: values.clientCountry,
      },
      clientEmail: values.clientEmail,
      clientName: values.clientName,
      description: values.description,
      items: popupItemsFields,
      paymentDue: paymentDue,
      paymentTerms: paymentTerms || paymentTerms.split(" ")[1],
      senderAddress: {
        street: values.senderStreet,
        city: values.senderCity,
        postCode: values.senderPostCode,
        country: values.senderCountry,
      },
      status: "pending",
      total: calculateTotal(popupItemsFields),
    };
  } else {
    return {
      id: invoice.id,
      createdAt: invoice.createdAt,
      clientAddress: {
        street: values.clientStreet,
        city: values.clientCity,
        postCode: values.clientPostCode,
        coutry: values.clientCountry,
      },
      clientEmail: values.clientEmail,
      clientName: values.clientName,
      description: values.description,
      items: popupItemsFields,
      paymentDue: paymentDue,
      paymentTerms: paymentTerms.split(" ")[1],
      senderAddress: {
        street: values.senderStreet,
        city: values.senderCity,
        postCode: values.senderPostCode,
        country: values.senderCountry,
      },
      status: invoice.status,
      total: calculateTotal(popupItemsFields),
    };
  }
};

const fillInvoice = (invoice, setValues) => {
  setValues({
    senderStreet: invoice.senderAddress.street,
    senderCity: invoice.senderAddress.city,
    senderPostCode: invoice.senderAddress.postCode,
    senderCountry: invoice.senderAddress.country,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientStreet: invoice.clientAddress.street,
    clientCity: invoice.clientAddress.city,
    clientPostCode: invoice.clientAddress.postCode,
    clientCountry: invoice.clientAddress.country,
    description: invoice.description,
  });
};

const themeChanger = (theme) => {
  if (theme.isDark) {
    document.documentElement.style.setProperty("--main-bg", "#141625");
    document.documentElement.style.setProperty(" --sideNav-bg", "#1E2139");
    document.documentElement.style.setProperty("--bg", "#1E2139");
    document.documentElement.style.setProperty("--input-bg", "#252945");
    document.documentElement.style.setProperty(
      "--dot-bg",
      "rgba(223, 227, 250, 0.06)"
    );

    document.documentElement.style.setProperty("--items-bg", "#252945");
    document.documentElement.style.setProperty("--total-bg", "#0C0E16");

    document.documentElement.style.setProperty("--text-bold", "#FFFFFF");
    document.documentElement.style.setProperty("--text-regular", "#DFE3FA");

    document.documentElement.style.setProperty("--form-border", "0");

    document.documentElement.style.setProperty(
      "--shadow",
      "0px 10px 20px rgba(0, 0, 0, 0.25)"
    );
  } else {
    document.documentElement.style.setProperty("--main-bg", "#f2f2f2");
    document.documentElement.style.setProperty(" --sideNav-bg", "#373b53");
    document.documentElement.style.setProperty("--bg", "#ffffff");
    document.documentElement.style.setProperty("--input-bg", "transparent");
    document.documentElement.style.setProperty(
      "--dot-bg",
      "rgba(55, 59, 83, 0.06)"
    );

    document.documentElement.style.setProperty("--items-bg", "#f9fafe");
    document.documentElement.style.setProperty("--total-bg", "#373b53");

    document.documentElement.style.setProperty("--text-bold", "#0c0e16");
    document.documentElement.style.setProperty("--text-regular", "#888eb0");

    document.documentElement.style.setProperty(
      "--form-border",
      "1px solid #dfe3fa"
    );

    document.documentElement.style.setProperty(
      "--shadow",
      "0px 10px 20px rgba(72, 84, 159, 0.25)"
    );
  }
};

export {
  isMobileScreen,
  setStatus,
  filter,
  check,
  fillTerms,
  calculateTotal,
  newInvoice,
  fillInvoice,
  themeChanger,
};
