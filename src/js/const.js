const operatorOptions = [{
        value: "=",
        label: "等于",
    },
    {
        value: "IN",
        label: "包含",
    },
    {
        value: "LIKE",
        label: "模糊",
    },
    {
        value: "LEFT_LIKE",
        label: "左模糊",
    },
    {
        value: "RIGHT_LIKE",
        label: "右模糊",
    },
    {
        value: ">",
        label: "大于",
    },
    {
        value: "<",
        label: "小于",
    },
    {
        value: ">=",
        label: "大于等于",
    },
    {
        value: "<=",
        label: "小于等于",
    },

    {
        value: "BETWEEN",
        label: "范围",
    },

    {
        value: "NOT IN",
        label: "不包含",
    },

    {
        value: "!=",
        label: "不等于",
    },
    {
        value: "IS NULL",
        label: "为空",
    },
    {
        value: "IS NOT NULL",
        label: "不为空",
    },
];

const elementOptions = [{
        value: "dept",
        label: "部门",
    },
    {
        value: "institutions",
        label: "单位",
    },
    {
        value: "position",
        label: "岗位",
    },
    {
        value: "role",
        label: "角色",
    },
    {
        value: "subject",
        label: "科目",
    },
    {
        value: "project",
        label: "项目",
    },
]



export default {
    operatorOptions,
    elementOptions
}