const normalizeConfig = (cfg = {}) => {
    cfg.options ??= {};
    cfg.options.dataList ??= {};
    cfg.options.dataList.show ??= false;

    cfg.options.table ??= {};
    cfg.options.table.showFooter ??= false;
    cfg.options.table.showRowOptions ??= false;
    cfg.options.table.showSerial ??= false;

    return cfg;
};

export { normalizeConfig };