<?php
$params = require(__DIR__ . '/params.php');

$config = [
    'id' => 'api',
    'basePath'  => dirname(__DIR__).'/..',
    'bootstrap'  => ['log'],
    'components'  => [
        // URL Configuration for our API
        'urlManager'  => [
            'enablePrettyUrl'  => true,
            'showScriptName'  => false,
            'rules' => [
                [
                    'class'  => 'yii\rest\UrlRule',
                    'controller'  => [
                        'v1/category',
                        'v1/keyword',
                    ],
                    'pluralize'=>false,
                ]
            ],
        ],
        'request' => [
            // Set Parser to JsonParser to accept Json in request
            'parsers' => [
                'application/json'  => 'yii\web\JsonParser',
            ]
        ],
        'cache'  => [
            'class'  => 'yii\caching\FileCache',
        ],
        // Enable logging for API in a api Directory different than web directory
        'log' => [
            'traceLevel'  => YII_DEBUG ? 3 : 0,
            'targets'  => [
                [
                    'class'  => 'yii\log\FileTarget',
                    'levels'  => ['error', 'warning'],
                    // maintain api logs in api directory
                    'logFile'  => '@api/runtime/logs/error.log'
                ],
            ],
        ],
    ],
    'modules' => [
        'v1' => [
            'basePath' => '@app/api/modules/v1', // base path for our module class
            'class' => 'app\api\modules\v1\Api', // Path to module class
        ]
    ],
    'params'  => $params,
];

return $config;

