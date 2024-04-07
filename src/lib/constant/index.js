export const ROLES = {
    SUPERADMIN: 'SUPERADMIN',
    ADMIN: 'ADMIN',
    USER: 'USER'
};

export const PLAN_TYPE = {
    SILVER: 'Silver',
    GOLD: 'Gold',
    PLATINUM: 'Platinum'
}

export const ACTION = {
    TRUE: true,
    FALSE: false
};

export const BUSINESS_PLAN = {
    "id": 3,
    "check": "Check",
    "object": "product",
    "active": true,
    "attributes": [],
    "created": Date.now(),
    "default_price": {
        "id": "price_2",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": Date.now(),
        "currency": "cad",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": 2,
        "recurring": {
            "aggregate_usage": null,
            "interval": "month",
            "interval_count": 1,
            "trial_period_days": null,
            "usage_type": "licensed"
        },
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "recurring",
        "unit_amount": 0,
        "unit_amount_decimal": "0"
    },
    "description": "Premium features tailored for businesses with high-volume scheduling and management needs.",
    "features": [
        {
            "name": "Every Gold Features"
        },
        {
            "name": "POS integration"
        },
        {
            "name": "Real-time sales reporting"
        },
        {
            "name": "Multi-location staffing"
        }
    ],
    "images": [],
    "livemode": false,
    "metadata": {
        "buttonText": "Contact Us",
        "class": "bg-gray-900 hover:bg-green-550"
    },
    "name": "Platinum",
    "package_dimensions": null,
    "shippable": null,
    "statement_descriptor": null,
    "tax_code": null,
    "type": "service",
    "unit_label": null,
    "updated": Date.now(),
    "url": null
}