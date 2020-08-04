import React, {Component} from 'react';
import './App.css';
import streamsaver from 'streamsaver';
import _ from 'lodash';
import moment from 'moment';

// import XLSX from 'xlsx';

const columns = 
{ 
  "price_list_device_plan_otp": 
  {
    'DEVICE ID':  { path: 'device_id' },
    'PLAN ID':  { path: 'plan_id' },
    'OTP': { path: 'otp' },
    "IS ACTIVE":  { path: 'is_active' },
    "ENTITY TYPE": { path: 'entity_type' },
    "ENTITY ID": { path: 'entity_id' }
  }
}
class App extends Component{

  constructor() {
    super();
    this.state = {
      isLoading: false,
      isDownloaded: false
    }
  }
 
async mockFetch(i, timer) {
  let array1 = [
    {
        "sku": "SM-G985FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1885",
        "is_active": true,
        "down_payment": {
            "value": 699,
            "currency": "EUR"
        },
        "id": "58adea54-c7c0-4d90-af16-8f1ae3a6b162",
        "created_date": "2020-07-09T04:57:44.892475+00:00",
        "modified_date": "2020-07-09T04:57:44.892475+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-07-09T05:06:24.790276+00:00",
        "etl_stage_id": "58adea54-c7c0-4d90-af16-8f1ae3a6b162",
        "etl_indexed_at": "2020-07-09T05:09:59.749177+00:00",
        "indexing_delay_in_minutes": 12.25,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "af4c4833-ba9a-4cf4-a25d-bddc9b95236e",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.688115+00:00",
        "etl_stage_id": "af4c4833-ba9a-4cf4-a25d-bddc9b95236e",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 333,
            "currency": "EUR"
        },
        "id": "befc38bd-8040-4de5-8d72-152a2c3f2e2c",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.078261+00:00",
        "etl_stage_id": "befc38bd-8040-4de5-8d72-152a2c3f2e2c",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 333,
            "currency": "EUR"
        },
        "id": "37ebb3b9-eb8a-496e-b67f-caee0e21fd7f",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.062846+00:00",
        "etl_stage_id": "37ebb3b9-eb8a-496e-b67f-caee0e21fd7f",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "f1adcf05-cd8d-42f3-9223-8090b15abe1a",
        "created_date": "2020-06-24T18:34:58.617802+00:00",
        "modified_date": "2020-06-24T18:34:58.617802+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T18:41:10.495397+00:00",
        "etl_stage_id": "f1adcf05-cd8d-42f3-9223-8090b15abe1a",
        "etl_indexed_at": "2020-06-24T18:44:51.358531+00:00",
        "indexing_delay_in_minutes": 9.88,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "d0273a72-0554-4de6-86d4-b8a09a5f45a8",
        "created_date": "2020-06-24T18:34:56.999077+00:00",
        "modified_date": "2020-06-24T18:34:56.999077+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T18:41:10.494040+00:00",
        "etl_stage_id": "d0273a72-0554-4de6-86d4-b8a09a5f45a8",
        "etl_indexed_at": "2020-06-24T18:44:51.358531+00:00",
        "indexing_delay_in_minutes": 9.91,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 5,
            "currency": "EUR"
        },
        "id": "9f3e0dc5-0272-4120-9b9d-9799b471bb12",
        "created_date": "2020-06-24T18:34:56.471336+00:00",
        "modified_date": "2020-06-24T18:34:56.471336+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T18:41:10.492415+00:00",
        "etl_stage_id": "9f3e0dc5-0272-4120-9b9d-9799b471bb12",
        "etl_indexed_at": "2020-06-24T18:44:51.358531+00:00",
        "indexing_delay_in_minutes": 9.91,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "c03d5394-afcd-40b3-8634-e55431a39cf9",
        "created_date": "2020-06-20T09:05:18.850813+00:00",
        "modified_date": "2020-06-20T09:05:18.850813+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.991981+00:00",
        "etl_stage_id": "c03d5394-afcd-40b3-8634-e55431a39cf9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.76,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2007",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "42db8eea-2b58-4aa7-80c3-e8ae2d625d17",
        "created_date": "2020-06-20T09:05:18.814849+00:00",
        "modified_date": "2020-06-20T09:05:18.814849+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.991478+00:00",
        "etl_stage_id": "42db8eea-2b58-4aa7-80c3-e8ae2d625d17",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775-138-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "f7c5b81e-7fc6-4e59-a25f-d21c70f34306",
        "created_date": "2020-06-20T09:05:18.812824+00:00",
        "modified_date": "2020-06-20T09:05:18.812824+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.990975+00:00",
        "etl_stage_id": "f7c5b81e-7fc6-4e59-a25f-d21c70f34306",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2006",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "f2030269-f474-4178-a922-783de830b568",
        "created_date": "2020-06-20T09:05:18.756884+00:00",
        "modified_date": "2020-06-20T09:05:18.756884+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.990472+00:00",
        "etl_stage_id": "f2030269-f474-4178-a922-783de830b568",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "a5ec3fa5-8d91-41d7-a33c-41b038437755",
        "created_date": "2020-06-20T09:05:18.750897+00:00",
        "modified_date": "2020-06-20T09:05:18.750897+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.989968+00:00",
        "etl_stage_id": "a5ec3fa5-8d91-41d7-a33c-41b038437755",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773-136-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "883a769f-2daa-4af7-894a-c317e65ac3c4",
        "created_date": "2020-06-20T09:05:18.651445+00:00",
        "modified_date": "2020-06-20T09:05:18.651445+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.988950+00:00",
        "etl_stage_id": "883a769f-2daa-4af7-894a-c317e65ac3c4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2005",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "f4e3a275-a612-49d1-91b3-6cd0d249c697",
        "created_date": "2020-06-20T09:05:18.651890+00:00",
        "modified_date": "2020-06-20T09:05:18.651890+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.989463+00:00",
        "etl_stage_id": "f4e3a275-a612-49d1-91b3-6cd0d249c697",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "b63ab63c-3c8e-4166-ab11-ab83a66fe54c",
        "created_date": "2020-06-20T09:05:18.582222+00:00",
        "modified_date": "2020-06-20T09:05:18.582222+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.988446+00:00",
        "etl_stage_id": "b63ab63c-3c8e-4166-ab11-ab83a66fe54c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2004",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "9adfc921-b2a4-4044-9cd1-8e00d5b1049f",
        "created_date": "2020-06-20T09:05:18.578965+00:00",
        "modified_date": "2020-06-20T09:05:18.578965+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.987941+00:00",
        "etl_stage_id": "9adfc921-b2a4-4044-9cd1-8e00d5b1049f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2003",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "8f69c885-8960-439d-be30-5012b3c1b79e",
        "created_date": "2020-06-20T09:05:18.546362+00:00",
        "modified_date": "2020-06-20T09:05:18.546362+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.986931+00:00",
        "etl_stage_id": "8f69c885-8960-439d-be30-5012b3c1b79e",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-237-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "41ac7156-247e-4bfd-8d88-d142a3fc91dd",
        "created_date": "2020-06-20T09:05:18.546809+00:00",
        "modified_date": "2020-06-20T09:05:18.546809+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.987436+00:00",
        "etl_stage_id": "41ac7156-247e-4bfd-8d88-d142a3fc91dd",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-163-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "d852e088-6441-41a3-82aa-ecd09e1fdf8f",
        "created_date": "2020-06-20T09:05:18.500284+00:00",
        "modified_date": "2020-06-20T09:05:18.500284+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.985923+00:00",
        "etl_stage_id": "d852e088-6441-41a3-82aa-ecd09e1fdf8f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2002",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "4aa4aca5-563d-4c22-a431-daf6c8018787",
        "created_date": "2020-06-20T09:05:18.500645+00:00",
        "modified_date": "2020-06-20T09:05:18.500645+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.986428+00:00",
        "etl_stage_id": "4aa4aca5-563d-4c22-a431-daf6c8018787",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "21e83115-5f56-4315-99f2-a6667fd0af9c",
        "created_date": "2020-06-20T09:05:18.416447+00:00",
        "modified_date": "2020-06-20T09:05:18.416447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.985417+00:00",
        "etl_stage_id": "21e83115-5f56-4315-99f2-a6667fd0af9c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "3d6da2bf-f2f4-4c1d-a386-e7d89e48eec1",
        "created_date": "2020-06-20T09:05:18.415415+00:00",
        "modified_date": "2020-06-20T09:05:18.415415+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.984895+00:00",
        "etl_stage_id": "3d6da2bf-f2f4-4c1d-a386-e7d89e48eec1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "d9caea21-9d97-4aa8-b2a4-c21e66088009",
        "created_date": "2020-06-20T09:05:18.362396+00:00",
        "modified_date": "2020-06-20T09:05:18.362396+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.984391+00:00",
        "etl_stage_id": "d9caea21-9d97-4aa8-b2a4-c21e66088009",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-242-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "7d9d2caa-4fc0-4f70-a29d-2b9bc1ddedbe",
        "created_date": "2020-06-20T09:05:18.361855+00:00",
        "modified_date": "2020-06-20T09:05:18.361855+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.983886+00:00",
        "etl_stage_id": "7d9d2caa-4fc0-4f70-a29d-2b9bc1ddedbe",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-161-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "95c1d841-ea2a-4f91-8bda-2a07f29e7e40",
        "created_date": "2020-06-20T09:05:18.252102+00:00",
        "modified_date": "2020-06-20T09:05:18.252102+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.982880+00:00",
        "etl_stage_id": "95c1d841-ea2a-4f91-8bda-2a07f29e7e40",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.77,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "70638ddd-6513-466f-9228-4687c6a931b2",
        "created_date": "2020-06-20T09:05:18.171541+00:00",
        "modified_date": "2020-06-20T09:05:18.171541+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.982377+00:00",
        "etl_stage_id": "70638ddd-6513-466f-9228-4687c6a931b2",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "535a2000-2dee-437a-a399-31b71963fed8",
        "created_date": "2020-06-20T09:05:18.162010+00:00",
        "modified_date": "2020-06-20T09:05:18.162010+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.981873+00:00",
        "etl_stage_id": "535a2000-2dee-437a-a399-31b71963fed8",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761-153-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "68cfc2c6-624c-4256-aa2f-94f401b1ab40",
        "created_date": "2020-06-20T09:05:18.116599+00:00",
        "modified_date": "2020-06-20T09:05:18.116599+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.981369+00:00",
        "etl_stage_id": "68cfc2c6-624c-4256-aa2f-94f401b1ab40",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "d8443c63-74fd-49e5-94da-6f69ce9e8e34",
        "created_date": "2020-06-20T09:05:18.112340+00:00",
        "modified_date": "2020-06-20T09:05:18.112340+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.980853+00:00",
        "etl_stage_id": "d8443c63-74fd-49e5-94da-6f69ce9e8e34",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "32147543-ba3c-4d7a-91f4-ba5807840076",
        "created_date": "2020-06-20T09:05:18.034294+00:00",
        "modified_date": "2020-06-20T09:05:18.034294+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.980350+00:00",
        "etl_stage_id": "32147543-ba3c-4d7a-91f4-ba5807840076",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "66efe9ac-2973-423c-9aa1-118a469a2446",
        "created_date": "2020-06-20T09:05:18.033374+00:00",
        "modified_date": "2020-06-20T09:05:18.033374+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.979845+00:00",
        "etl_stage_id": "66efe9ac-2973-423c-9aa1-118a469a2446",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "b7c0fed6-a2bf-4bb5-b72d-9a050ebff091",
        "created_date": "2020-06-20T09:05:17.976019+00:00",
        "modified_date": "2020-06-20T09:05:17.976019+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.978834+00:00",
        "etl_stage_id": "b7c0fed6-a2bf-4bb5-b72d-9a050ebff091",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759-151-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "69bbc3ae-0757-4039-9f75-a9586d10d99a",
        "created_date": "2020-06-20T09:05:17.976405+00:00",
        "modified_date": "2020-06-20T09:05:17.976405+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.979340+00:00",
        "etl_stage_id": "69bbc3ae-0757-4039-9f75-a9586d10d99a",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "cc92af2e-72ce-4462-ac10-6945213fee96",
        "created_date": "2020-06-20T09:05:17.902098+00:00",
        "modified_date": "2020-06-20T09:05:17.902098+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.977819+00:00",
        "etl_stage_id": "cc92af2e-72ce-4462-ac10-6945213fee96",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "74b22059-6de2-454e-aca8-3fc5bb96c8cc",
        "created_date": "2020-06-20T09:05:17.902541+00:00",
        "modified_date": "2020-06-20T09:05:17.902541+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.978328+00:00",
        "etl_stage_id": "74b22059-6de2-454e-aca8-3fc5bb96c8cc",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "5de17757-39d4-4b1d-aede-1a57a111508c",
        "created_date": "2020-06-20T09:05:17.856895+00:00",
        "modified_date": "2020-06-20T09:05:17.856895+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.977245+00:00",
        "etl_stage_id": "5de17757-39d4-4b1d-aede-1a57a111508c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757-149-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "88714ab1-9b15-4288-98fc-760a08492484",
        "created_date": "2020-06-20T09:05:17.854232+00:00",
        "modified_date": "2020-06-20T09:05:17.854232+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.976707+00:00",
        "etl_stage_id": "88714ab1-9b15-4288-98fc-760a08492484",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-260-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "ab2c0bb1-4236-4d96-aa1f-d5f6a8e73639",
        "created_date": "2020-06-20T09:05:17.804688+00:00",
        "modified_date": "2020-06-20T09:05:17.804688+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.976202+00:00",
        "etl_stage_id": "ab2c0bb1-4236-4d96-aa1f-d5f6a8e73639",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "1e1e4ed4-f08e-4fdc-8145-340f50e50b14",
        "created_date": "2020-06-20T09:05:17.781524+00:00",
        "modified_date": "2020-06-20T09:05:17.781524+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.975698+00:00",
        "etl_stage_id": "1e1e4ed4-f08e-4fdc-8145-340f50e50b14",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "1632e9f9-59b0-4409-a790-537113f2ccae",
        "created_date": "2020-06-20T09:05:17.744589+00:00",
        "modified_date": "2020-06-20T09:05:17.744589+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.975184+00:00",
        "etl_stage_id": "1632e9f9-59b0-4409-a790-537113f2ccae",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304-217-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "86860520-1494-4baa-837f-4387e23adf6f",
        "created_date": "2020-06-20T09:05:17.735122+00:00",
        "modified_date": "2020-06-20T09:05:17.735122+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.974679+00:00",
        "etl_stage_id": "86860520-1494-4baa-837f-4387e23adf6f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755-169-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "450cb8a4-2ced-4f61-924a-264348193eb9",
        "created_date": "2020-06-20T09:05:17.730560+00:00",
        "modified_date": "2020-06-20T09:05:17.730560+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.974175+00:00",
        "etl_stage_id": "450cb8a4-2ced-4f61-924a-264348193eb9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "7adbe9f4-490d-4397-a8b4-9b1a8ba44c69",
        "created_date": "2020-06-20T09:05:17.660168+00:00",
        "modified_date": "2020-06-20T09:05:17.660168+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.973101+00:00",
        "etl_stage_id": "7adbe9f4-490d-4397-a8b4-9b1a8ba44c69",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "489e21ee-b334-4323-a309-f05666b7810a",
        "created_date": "2020-06-20T09:05:17.660730+00:00",
        "modified_date": "2020-06-20T09:05:17.660730+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.973666+00:00",
        "etl_stage_id": "489e21ee-b334-4323-a309-f05666b7810a",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "34b7d00e-7303-4178-af74-2093aabedc93",
        "created_date": "2020-06-20T09:05:17.658171+00:00",
        "modified_date": "2020-06-20T09:05:17.658171+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.972586+00:00",
        "etl_stage_id": "34b7d00e-7303-4178-af74-2093aabedc93",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.78,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303-216-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "13542220-c962-40f7-aecc-f6f70f03ae10",
        "created_date": "2020-06-20T09:05:17.614788+00:00",
        "modified_date": "2020-06-20T09:05:17.614788+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.972082+00:00",
        "etl_stage_id": "13542220-c962-40f7-aecc-f6f70f03ae10",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753-167-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "a2cb241d-1f4e-4d81-a183-f3a92331494f",
        "created_date": "2020-06-20T09:05:17.610869+00:00",
        "modified_date": "2020-06-20T09:05:17.610869+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.971577+00:00",
        "etl_stage_id": "a2cb241d-1f4e-4d81-a183-f3a92331494f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "566adb2d-31bf-4086-b17d-638c85bc6366",
        "created_date": "2020-06-20T09:05:17.585325+00:00",
        "modified_date": "2020-06-20T09:05:17.585325+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.971072+00:00",
        "etl_stage_id": "566adb2d-31bf-4086-b17d-638c85bc6366",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "6586767f-1688-4d62-85d4-a150e1e8c4c9",
        "created_date": "2020-06-20T09:05:17.533170+00:00",
        "modified_date": "2020-06-20T09:05:17.533170+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.970569+00:00",
        "etl_stage_id": "6586767f-1688-4d62-85d4-a150e1e8c4c9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "4c702d82-5ea9-408e-96af-05cbd3062be4",
        "created_date": "2020-06-20T09:05:17.521521+00:00",
        "modified_date": "2020-06-20T09:05:17.521521+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.970065+00:00",
        "etl_stage_id": "4c702d82-5ea9-408e-96af-05cbd3062be4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "6f8469a1-ba3f-4ac2-9776-843829da742d",
        "created_date": "2020-06-20T09:05:17.482379+00:00",
        "modified_date": "2020-06-20T09:05:17.482379+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.969560+00:00",
        "etl_stage_id": "6f8469a1-ba3f-4ac2-9776-843829da742d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302-215-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "c6574e50-1ad3-44f5-a177-63239d92a54a",
        "created_date": "2020-06-20T09:05:17.472601+00:00",
        "modified_date": "2020-06-20T09:05:17.472601+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.969056+00:00",
        "etl_stage_id": "c6574e50-1ad3-44f5-a177-63239d92a54a",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751-165-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "e92e4745-6376-442f-b3f9-9b79d643a327",
        "created_date": "2020-06-20T09:05:17.448142+00:00",
        "modified_date": "2020-06-20T09:05:17.448142+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.968542+00:00",
        "etl_stage_id": "e92e4745-6376-442f-b3f9-9b79d643a327",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "dabd3f87-c169-4e3b-874d-c6059e7ace10",
        "created_date": "2020-06-20T09:05:17.418336+00:00",
        "modified_date": "2020-06-20T09:05:17.418336+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.968037+00:00",
        "etl_stage_id": "dabd3f87-c169-4e3b-874d-c6059e7ace10",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "bbd94daf-2848-4e30-9383-879d22b690f3",
        "created_date": "2020-06-20T09:05:17.409639+00:00",
        "modified_date": "2020-06-20T09:05:17.409639+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.967532+00:00",
        "etl_stage_id": "bbd94daf-2848-4e30-9383-879d22b690f3",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "0e598655-5c35-44ed-9733-8133c3a4eedd",
        "created_date": "2020-06-20T09:05:17.379403+00:00",
        "modified_date": "2020-06-20T09:05:17.379403+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.967030+00:00",
        "etl_stage_id": "0e598655-5c35-44ed-9733-8133c3a4eedd",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "89d853e5-c009-4795-8049-398ea85271bd",
        "created_date": "2020-06-20T09:05:17.369270+00:00",
        "modified_date": "2020-06-20T09:05:17.369270+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.966525+00:00",
        "etl_stage_id": "89d853e5-c009-4795-8049-398ea85271bd",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301-210-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "d7f39df3-e703-4b94-8a5e-1acde1a6105c",
        "created_date": "2020-06-20T09:05:17.356413+00:00",
        "modified_date": "2020-06-20T09:05:17.356413+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.966020+00:00",
        "etl_stage_id": "d7f39df3-e703-4b94-8a5e-1acde1a6105c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "fd24e60f-b203-4fd8-8c5d-3d44995ea89f",
        "created_date": "2020-06-20T09:05:17.341279+00:00",
        "modified_date": "2020-06-20T09:05:17.341279+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.965515+00:00",
        "etl_stage_id": "fd24e60f-b203-4fd8-8c5d-3d44995ea89f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "02cbcca6-c31e-4f5d-a906-59b13ccc2b78",
        "created_date": "2020-06-20T09:05:17.318463+00:00",
        "modified_date": "2020-06-20T09:05:17.318463+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.964991+00:00",
        "etl_stage_id": "02cbcca6-c31e-4f5d-a906-59b13ccc2b78",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "532561bb-fa62-493c-9a14-517115f678fa",
        "created_date": "2020-06-20T09:05:17.315335+00:00",
        "modified_date": "2020-06-20T09:05:17.315335+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.964488+00:00",
        "etl_stage_id": "532561bb-fa62-493c-9a14-517115f678fa",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "a5a60168-4c82-454d-8aab-80ee50adb358",
        "created_date": "2020-06-20T09:05:17.302029+00:00",
        "modified_date": "2020-06-20T09:05:17.302029+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.963985+00:00",
        "etl_stage_id": "a5a60168-4c82-454d-8aab-80ee50adb358",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "bc75a119-b887-4613-ae46-6ea892c19ba8",
        "created_date": "2020-06-20T09:05:17.277009+00:00",
        "modified_date": "2020-06-20T09:05:17.277009+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.963481+00:00",
        "etl_stage_id": "bc75a119-b887-4613-ae46-6ea892c19ba8",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300-214-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "d8c6b6a2-dab1-4e1c-9e13-923533a10438",
        "created_date": "2020-06-20T09:05:17.271789+00:00",
        "modified_date": "2020-06-20T09:05:17.271789+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.962977+00:00",
        "etl_stage_id": "d8c6b6a2-dab1-4e1c-9e13-923533a10438",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "2c05dafe-ba65-41f5-848b-a9ee4736e3ac",
        "created_date": "2020-06-20T09:05:17.257464+00:00",
        "modified_date": "2020-06-20T09:05:17.257464+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.962474+00:00",
        "etl_stage_id": "2c05dafe-ba65-41f5-848b-a9ee4736e3ac",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1911",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "1b82aa85-b078-4959-b1fe-6203c9b15949",
        "created_date": "2020-06-20T09:05:17.232466+00:00",
        "modified_date": "2020-06-20T09:05:17.232466+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.961970+00:00",
        "etl_stage_id": "1b82aa85-b078-4959-b1fe-6203c9b15949",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "d15e4640-1534-4550-bccb-8db02662a936",
        "created_date": "2020-06-20T09:05:17.231549+00:00",
        "modified_date": "2020-06-20T09:05:17.231549+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.961465+00:00",
        "etl_stage_id": "d15e4640-1534-4550-bccb-8db02662a936",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645-243-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "a4bbc306-379d-4e54-a551-77549d507cf4",
        "created_date": "2020-06-20T09:05:17.217107+00:00",
        "modified_date": "2020-06-20T09:05:17.217107+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.960949+00:00",
        "etl_stage_id": "a4bbc306-379d-4e54-a551-77549d507cf4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299-212-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "0673f868-cda7-43f7-8bb7-9ec5f0d1e851",
        "created_date": "2020-06-20T09:05:17.185970+00:00",
        "modified_date": "2020-06-20T09:05:17.185970+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.960443+00:00",
        "etl_stage_id": "0673f868-cda7-43f7-8bb7-9ec5f0d1e851",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907-244-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "34ecc1cc-90e3-451c-a311-f04b01448815",
        "created_date": "2020-06-20T09:05:17.184392+00:00",
        "modified_date": "2020-06-20T09:05:17.184392+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.959939+00:00",
        "etl_stage_id": "34ecc1cc-90e3-451c-a311-f04b01448815",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "d227bb09-8047-4cbe-9edc-6b1d8039f307",
        "created_date": "2020-06-20T09:05:17.177420+00:00",
        "modified_date": "2020-06-20T09:05:17.177420+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.959434+00:00",
        "etl_stage_id": "d227bb09-8047-4cbe-9edc-6b1d8039f307",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "24171f4c-d918-44c7-b558-88bd71884a81",
        "created_date": "2020-06-20T09:05:17.141167+00:00",
        "modified_date": "2020-06-20T09:05:17.141167+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.958929+00:00",
        "etl_stage_id": "24171f4c-d918-44c7-b558-88bd71884a81",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "d056e0ea-bbb4-4857-a25d-84f833302aff",
        "created_date": "2020-06-20T09:05:17.140354+00:00",
        "modified_date": "2020-06-20T09:05:17.140354+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.958424+00:00",
        "etl_stage_id": "d056e0ea-bbb4-4857-a25d-84f833302aff",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "150591dd-5412-4bc8-b15b-4b6c04da3cc7",
        "created_date": "2020-06-20T09:05:17.139573+00:00",
        "modified_date": "2020-06-20T09:05:17.139573+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.957918+00:00",
        "etl_stage_id": "150591dd-5412-4bc8-b15b-4b6c04da3cc7",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "1676fd0d-ff8c-482d-a5ce-9b44a5f5da6a",
        "created_date": "2020-06-20T09:05:17.095054+00:00",
        "modified_date": "2020-06-20T09:05:17.095054+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.956891+00:00",
        "etl_stage_id": "1676fd0d-ff8c-482d-a5ce-9b44a5f5da6a",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1903",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "23418ec0-28f6-435c-b837-a3105145100f",
        "created_date": "2020-06-20T09:05:17.095427+00:00",
        "modified_date": "2020-06-20T09:05:17.095427+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.957412+00:00",
        "etl_stage_id": "23418ec0-28f6-435c-b837-a3105145100f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297-213-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "2b7a9213-b316-40fa-b1b4-0b5e59d3decc",
        "created_date": "2020-06-20T09:05:17.094639+00:00",
        "modified_date": "2020-06-20T09:05:17.094639+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.956379+00:00",
        "etl_stage_id": "2b7a9213-b316-40fa-b1b4-0b5e59d3decc",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.79,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1902",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "d5fcb5ab-2ff7-42f7-b478-7494847b1c05",
        "created_date": "2020-06-20T09:05:17.031579+00:00",
        "modified_date": "2020-06-20T09:05:17.031579+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.955819+00:00",
        "etl_stage_id": "d5fcb5ab-2ff7-42f7-b478-7494847b1c05",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "89d56731-2d63-43d4-b90c-ade34b5e1b83",
        "created_date": "2020-06-20T09:05:17.030338+00:00",
        "modified_date": "2020-06-20T09:05:17.030338+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.954779+00:00",
        "etl_stage_id": "89d56731-2d63-43d4-b90c-ade34b5e1b83",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "05b2733d-2e45-411e-b68f-97dbe6cc8c86",
        "created_date": "2020-06-20T09:05:17.030933+00:00",
        "modified_date": "2020-06-20T09:05:17.030933+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.955283+00:00",
        "etl_stage_id": "05b2733d-2e45-411e-b68f-97dbe6cc8c86",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "f20d6cf4-fda5-4054-892e-9094a00e1609",
        "created_date": "2020-06-20T09:05:16.951859+00:00",
        "modified_date": "2020-06-20T09:05:16.951859+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.954276+00:00",
        "etl_stage_id": "f20d6cf4-fda5-4054-892e-9094a00e1609",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296-211-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "8da88da5-cd4e-4f55-8157-f35ae7c8f137",
        "created_date": "2020-06-20T09:05:16.950716+00:00",
        "modified_date": "2020-06-20T09:05:16.950716+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.953772+00:00",
        "etl_stage_id": "8da88da5-cd4e-4f55-8157-f35ae7c8f137",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1901",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "b7e69994-9691-4341-9484-0b6a9cfbfe27",
        "created_date": "2020-06-20T09:05:16.947484+00:00",
        "modified_date": "2020-06-20T09:05:16.947484+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.953267+00:00",
        "etl_stage_id": "b7e69994-9691-4341-9484-0b6a9cfbfe27",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "3f4b803a-115f-4973-b726-546539c83442",
        "created_date": "2020-06-20T09:05:16.894426+00:00",
        "modified_date": "2020-06-20T09:05:16.894426+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.952753+00:00",
        "etl_stage_id": "3f4b803a-115f-4973-b726-546539c83442",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "2730be7f-c5fa-47fb-b9ef-7f15c756c743",
        "created_date": "2020-06-20T09:05:16.893584+00:00",
        "modified_date": "2020-06-20T09:05:16.893584+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.952249+00:00",
        "etl_stage_id": "2730be7f-c5fa-47fb-b9ef-7f15c756c743",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838-239-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "2adb132e-890a-4770-9a78-2f3b5fd2ddd7",
        "created_date": "2020-06-20T09:05:16.880855+00:00",
        "modified_date": "2020-06-20T09:05:16.880855+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.951745+00:00",
        "etl_stage_id": "2adb132e-890a-4770-9a78-2f3b5fd2ddd7",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "160413c9-8b79-4d99-a594-8b750fe91945",
        "created_date": "2020-06-20T09:05:16.853784+00:00",
        "modified_date": "2020-06-20T09:05:16.853784+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.951240+00:00",
        "etl_stage_id": "160413c9-8b79-4d99-a594-8b750fe91945",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970-206-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "6fa6e6c1-6a2f-4ca3-8bdd-2eb5261832d1",
        "created_date": "2020-06-20T09:05:16.847911+00:00",
        "modified_date": "2020-06-20T09:05:16.847911+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.950734+00:00",
        "etl_stage_id": "6fa6e6c1-6a2f-4ca3-8bdd-2eb5261832d1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "a15bb4a6-117d-4464-a219-48d8358f251b",
        "created_date": "2020-06-20T09:05:16.842641+00:00",
        "modified_date": "2020-06-20T09:05:16.842641+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.950228+00:00",
        "etl_stage_id": "a15bb4a6-117d-4464-a219-48d8358f251b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1545",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "afadfa0d-de60-4674-8c7f-2033cd2fcd4d",
        "created_date": "2020-06-20T09:05:16.792541+00:00",
        "modified_date": "2020-06-20T09:05:16.792541+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.949723+00:00",
        "etl_stage_id": "afadfa0d-de60-4674-8c7f-2033cd2fcd4d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "4001565e-b3e4-4198-94b3-b2343e7c70b7",
        "created_date": "2020-06-20T09:05:16.787315+00:00",
        "modified_date": "2020-06-20T09:05:16.787315+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.949216+00:00",
        "etl_stage_id": "4001565e-b3e4-4198-94b3-b2343e7c70b7",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837-238-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "b5a4626a-bd84-4359-9e1f-c12295141879",
        "created_date": "2020-06-20T09:05:16.783973+00:00",
        "modified_date": "2020-06-20T09:05:16.783973+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.948701+00:00",
        "etl_stage_id": "b5a4626a-bd84-4359-9e1f-c12295141879",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1163",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "965d6fca-7950-43b6-972a-cc151ea7e4d1",
        "created_date": "2020-06-20T09:05:16.740173+00:00",
        "modified_date": "2020-06-20T09:05:16.740173+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.948197+00:00",
        "etl_stage_id": "965d6fca-7950-43b6-972a-cc151ea7e4d1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969-205-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "f4708228-05c6-4cbe-b782-1e6ebbb72cca",
        "created_date": "2020-06-20T09:05:16.725562+00:00",
        "modified_date": "2020-06-20T09:05:16.725562+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.947691+00:00",
        "etl_stage_id": "f4708228-05c6-4cbe-b782-1e6ebbb72cca",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "0a3deeb4-6a8c-4645-aa03-9d551b034abe",
        "created_date": "2020-06-20T09:05:16.724689+00:00",
        "modified_date": "2020-06-20T09:05:16.724689+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.947187+00:00",
        "etl_stage_id": "0a3deeb4-6a8c-4645-aa03-9d551b034abe",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474-53-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "436c7ff6-1106-48bb-8c04-163e271cd55b",
        "created_date": "2020-06-20T09:05:16.723321+00:00",
        "modified_date": "2020-06-20T09:05:16.723321+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.946683+00:00",
        "etl_stage_id": "436c7ff6-1106-48bb-8c04-163e271cd55b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312-224-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 4,
            "currency": "EUR"
        },
        "id": "da83504f-af5f-4b54-8250-e592dcfc866b",
        "created_date": "2020-06-20T09:05:16.677898+00:00",
        "modified_date": "2020-06-20T09:05:16.677898+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.946176+00:00",
        "etl_stage_id": "da83504f-af5f-4b54-8250-e592dcfc866b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831-172-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 16,
            "currency": "EUR"
        },
        "id": "7a021ecb-595f-4e9f-a6ed-2a947ec5172d",
        "created_date": "2020-06-20T09:05:16.665425+00:00",
        "modified_date": "2020-06-20T09:05:16.665425+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.945669+00:00",
        "etl_stage_id": "7a021ecb-595f-4e9f-a6ed-2a947ec5172d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "5c155544-a845-417a-affe-65d74d8d7358",
        "created_date": "2020-06-20T09:05:16.658510+00:00",
        "modified_date": "2020-06-20T09:05:16.658510+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.945155+00:00",
        "etl_stage_id": "5c155544-a845-417a-affe-65d74d8d7358",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "7f547fa3-4d1a-45a0-9a5d-daea51282362",
        "created_date": "2020-06-20T09:05:16.651776+00:00",
        "modified_date": "2020-06-20T09:05:16.651776+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.944632+00:00",
        "etl_stage_id": "7f547fa3-4d1a-45a0-9a5d-daea51282362",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "f68c85f8-37a0-4f36-9090-8df9540b4f20",
        "created_date": "2020-06-20T09:05:16.621425+00:00",
        "modified_date": "2020-06-20T09:05:16.621425+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.944128+00:00",
        "etl_stage_id": "f68c85f8-37a0-4f36-9090-8df9540b4f20",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "915e9eeb-40f3-4b37-ad57-9c6ba9812fce",
        "created_date": "2020-06-20T09:05:16.600548+00:00",
        "modified_date": "2020-06-20T09:05:16.600548+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.943624+00:00",
        "etl_stage_id": "915e9eeb-40f3-4b37-ad57-9c6ba9812fce",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968-204-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "5572daa2-480a-4c02-95c5-2c2549e924b1",
        "created_date": "2020-06-20T09:05:16.580143+00:00",
        "modified_date": "2020-06-20T09:05:16.580143+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.943119+00:00",
        "etl_stage_id": "5572daa2-480a-4c02-95c5-2c2549e924b1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473-51-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "1ef105a7-ed70-4287-bcab-dceb24cac0b0",
        "created_date": "2020-06-20T09:05:16.576236+00:00",
        "modified_date": "2020-06-20T09:05:16.576236+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.942615+00:00",
        "etl_stage_id": "1ef105a7-ed70-4287-bcab-dceb24cac0b0",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2311",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "9a5da107-0c22-4992-a9e1-7fdb0ccb7a37",
        "created_date": "2020-06-20T09:05:16.560292+00:00",
        "modified_date": "2020-06-20T09:05:16.560292+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.942110+00:00",
        "etl_stage_id": "9a5da107-0c22-4992-a9e1-7fdb0ccb7a37",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "ed7eb4fb-9be6-49e5-b3d8-d5162b24f793",
        "created_date": "2020-06-20T09:05:16.547827+00:00",
        "modified_date": "2020-06-20T09:05:16.547827+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.941606+00:00",
        "etl_stage_id": "ed7eb4fb-9be6-49e5-b3d8-d5162b24f793",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "45dd3af5-d37f-4f47-be5a-da09f7f7e8e3",
        "created_date": "2020-06-20T09:05:16.543881+00:00",
        "modified_date": "2020-06-20T09:05:16.543881+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.941099+00:00",
        "etl_stage_id": "45dd3af5-d37f-4f47-be5a-da09f7f7e8e3",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "f0573dc7-666c-443b-bdb3-f4a9d15d0483",
        "created_date": "2020-06-20T09:05:16.542657+00:00",
        "modified_date": "2020-06-20T09:05:16.542657+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.940579+00:00",
        "etl_stage_id": "f0573dc7-666c-443b-bdb3-f4a9d15d0483",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829-171-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "8b7916ab-b6de-4ada-91d3-28b262a9e5ea",
        "created_date": "2020-06-20T09:05:16.532029+00:00",
        "modified_date": "2020-06-20T09:05:16.532029+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.940075+00:00",
        "etl_stage_id": "8b7916ab-b6de-4ada-91d3-28b262a9e5ea",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310-223-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "8e198358-984e-4825-a67f-654770472548",
        "created_date": "2020-06-20T09:05:16.483889+00:00",
        "modified_date": "2020-06-20T09:05:16.483889+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.939571+00:00",
        "etl_stage_id": "8e198358-984e-4825-a67f-654770472548",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "870c3269-1f51-4335-a92d-66beb062449d",
        "created_date": "2020-06-20T09:05:16.476257+00:00",
        "modified_date": "2020-06-20T09:05:16.476257+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.939066+00:00",
        "etl_stage_id": "870c3269-1f51-4335-a92d-66beb062449d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472-52-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "48d1d4f8-e2b7-4815-86d5-2dfa962ce6a6",
        "created_date": "2020-06-20T09:05:16.464928+00:00",
        "modified_date": "2020-06-20T09:05:16.464928+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.938560+00:00",
        "etl_stage_id": "48d1d4f8-e2b7-4815-86d5-2dfa962ce6a6",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "2d04618a-3681-49d7-8f78-9bee10f4c070",
        "created_date": "2020-06-20T09:05:16.461202+00:00",
        "modified_date": "2020-06-20T09:05:16.461202+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.937549+00:00",
        "etl_stage_id": "2d04618a-3681-49d7-8f78-9bee10f4c070",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966-202-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "85ed50b2-a21a-4c4f-8019-fb197a0bcd20",
        "created_date": "2020-06-20T09:05:16.461602+00:00",
        "modified_date": "2020-06-20T09:05:16.461602+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.938055+00:00",
        "etl_stage_id": "85ed50b2-a21a-4c4f-8019-fb197a0bcd20",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.8,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "2b0abb63-9e38-4608-8bb5-198d22d6aa4e",
        "created_date": "2020-06-20T09:05:16.419773+00:00",
        "modified_date": "2020-06-20T09:05:16.419773+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.937042+00:00",
        "etl_stage_id": "2b0abb63-9e38-4608-8bb5-198d22d6aa4e",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "ad87bac2-f27e-4361-87bd-381fd5168a84",
        "created_date": "2020-06-20T09:05:16.418556+00:00",
        "modified_date": "2020-06-20T09:05:16.418556+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.936522+00:00",
        "etl_stage_id": "ad87bac2-f27e-4361-87bd-381fd5168a84",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "6c62dbe1-89aa-45e5-b883-d7314b9c1238",
        "created_date": "2020-06-20T09:05:16.364347+00:00",
        "modified_date": "2020-06-20T09:05:16.364347+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.935511+00:00",
        "etl_stage_id": "6c62dbe1-89aa-45e5-b883-d7314b9c1238",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "eeb30874-98a6-410c-9712-026d9e889d19",
        "created_date": "2020-06-20T09:05:16.364787+00:00",
        "modified_date": "2020-06-20T09:05:16.364787+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.936017+00:00",
        "etl_stage_id": "eeb30874-98a6-410c-9712-026d9e889d19",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966",
        "is_active": true,
        "down_payment": {
            "value": 22,
            "currency": "EUR"
        },
        "id": "752191a3-c9a9-4b46-b88d-43063b93896a",
        "created_date": "2020-06-20T09:05:16.358302+00:00",
        "modified_date": "2020-06-20T09:05:16.358302+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.934995+00:00",
        "etl_stage_id": "752191a3-c9a9-4b46-b88d-43063b93896a",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "587cfceb-da0b-4caa-b29f-c12776470847",
        "created_date": "2020-06-20T09:05:16.315092+00:00",
        "modified_date": "2020-06-20T09:05:16.315092+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.934491+00:00",
        "etl_stage_id": "587cfceb-da0b-4caa-b29f-c12776470847",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471-58-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "9d4eebcc-c5b9-4c91-b64e-04e4515e09bb",
        "created_date": "2020-06-20T09:05:16.314296+00:00",
        "modified_date": "2020-06-20T09:05:16.314296+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.933478+00:00",
        "etl_stage_id": "9d4eebcc-c5b9-4c91-b64e-04e4515e09bb",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309-222-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "0415dda6-d9d5-4d60-99c3-f54e9f147100",
        "created_date": "2020-06-20T09:05:16.314699+00:00",
        "modified_date": "2020-06-20T09:05:16.314699+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.933985+00:00",
        "etl_stage_id": "0415dda6-d9d5-4d60-99c3-f54e9f147100",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965-201-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "da4ace41-0570-4c49-b3e2-900f4e9afead",
        "created_date": "2020-06-20T09:05:16.305089+00:00",
        "modified_date": "2020-06-20T09:05:16.305089+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.932453+00:00",
        "etl_stage_id": "da4ace41-0570-4c49-b3e2-900f4e9afead",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-246-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "44a2e867-847a-4339-ab86-746169410903",
        "created_date": "2020-06-20T09:05:16.305574+00:00",
        "modified_date": "2020-06-20T09:05:16.305574+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.932957+00:00",
        "etl_stage_id": "44a2e867-847a-4339-ab86-746169410903",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c5570d62-7ba1-4354-9d92-5512de3a4886",
        "created_date": "2020-06-20T09:05:16.065181+00:00",
        "modified_date": "2020-06-20T09:05:16.065181+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.931444+00:00",
        "etl_stage_id": "c5570d62-7ba1-4354-9d92-5512de3a4886",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "6c620046-5438-44a5-8b4f-f7d389f568a5",
        "created_date": "2020-06-20T09:05:16.065557+00:00",
        "modified_date": "2020-06-20T09:05:16.065557+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.931949+00:00",
        "etl_stage_id": "6c620046-5438-44a5-8b4f-f7d389f568a5",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "63c43048-1e7a-4403-85e5-0783d9a31933",
        "created_date": "2020-06-20T09:05:16.058272+00:00",
        "modified_date": "2020-06-20T09:05:16.058272+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.930935+00:00",
        "etl_stage_id": "63c43048-1e7a-4403-85e5-0783d9a31933",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "b663eb6e-be69-48c1-9a15-271b3e99d401",
        "created_date": "2020-06-20T09:05:16.057844+00:00",
        "modified_date": "2020-06-20T09:05:16.057844+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.930431+00:00",
        "etl_stage_id": "b663eb6e-be69-48c1-9a15-271b3e99d401",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470-55-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a7261679-bd72-4fb6-acc9-82e2c32c9775",
        "created_date": "2020-06-20T09:05:16.023275+00:00",
        "modified_date": "2020-06-20T09:05:16.023275+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.929420+00:00",
        "etl_stage_id": "a7261679-bd72-4fb6-acc9-82e2c32c9775",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964-200-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "2155c6e7-8936-406b-91a7-057de528118f",
        "created_date": "2020-06-20T09:05:16.017542+00:00",
        "modified_date": "2020-06-20T09:05:16.017542+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.928899+00:00",
        "etl_stage_id": "2155c6e7-8936-406b-91a7-057de528118f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "63162ca3-1397-4c9a-8165-e9a0bacabd1c",
        "created_date": "2020-06-20T09:05:16.015028+00:00",
        "modified_date": "2020-06-20T09:05:16.015028+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.928394+00:00",
        "etl_stage_id": "63162ca3-1397-4c9a-8165-e9a0bacabd1c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308-221-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "8fbbc2e9-f2d7-45ee-819d-66559a931977",
        "created_date": "2020-06-20T09:05:16.012802+00:00",
        "modified_date": "2020-06-20T09:05:16.012802+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.927889+00:00",
        "etl_stage_id": "8fbbc2e9-f2d7-45ee-819d-66559a931977",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783-146-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "6b80ca4a-2b72-48bb-9444-75e92b325318",
        "created_date": "2020-06-20T09:05:16.009188+00:00",
        "modified_date": "2020-06-20T09:05:16.009188+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.927383+00:00",
        "etl_stage_id": "6b80ca4a-2b72-48bb-9444-75e92b325318",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "984822bf-6e88-47c4-97b8-d5757898470e",
        "created_date": "2020-06-20T09:05:15.970057+00:00",
        "modified_date": "2020-06-20T09:05:15.970057+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.926374+00:00",
        "etl_stage_id": "984822bf-6e88-47c4-97b8-d5757898470e",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d330df6b-8015-41fb-842c-a14aa0fca063",
        "created_date": "2020-06-20T09:05:15.970478+00:00",
        "modified_date": "2020-06-20T09:05:15.970478+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.926879+00:00",
        "etl_stage_id": "d330df6b-8015-41fb-842c-a14aa0fca063",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "316ce7c2-b21e-4c6b-b7b5-b606822d5890",
        "created_date": "2020-06-20T09:05:15.969683+00:00",
        "modified_date": "2020-06-20T09:05:15.969683+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.925870+00:00",
        "etl_stage_id": "316ce7c2-b21e-4c6b-b7b5-b606822d5890",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2285",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "ef27e2bf-e84b-4ffe-b305-dc76a6115661",
        "created_date": "2020-06-20T09:05:15.964110+00:00",
        "modified_date": "2020-06-20T09:05:15.964110+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.925354+00:00",
        "etl_stage_id": "ef27e2bf-e84b-4ffe-b305-dc76a6115661",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "98940018-cf0d-42a7-88ef-dfdb9bd60251",
        "created_date": "2020-06-20T09:05:15.938434+00:00",
        "modified_date": "2020-06-20T09:05:15.938434+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.924834+00:00",
        "etl_stage_id": "98940018-cf0d-42a7-88ef-dfdb9bd60251",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307-220-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "7cbca7a3-9594-4af3-9e0a-74bbf85acb1b",
        "created_date": "2020-06-20T09:05:15.923827+00:00",
        "modified_date": "2020-06-20T09:05:15.923827+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.924330+00:00",
        "etl_stage_id": "7cbca7a3-9594-4af3-9e0a-74bbf85acb1b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963-199-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "d74fbd58-8ff0-4709-86af-e390cdf0d7fe",
        "created_date": "2020-06-20T09:05:15.921136+00:00",
        "modified_date": "2020-06-20T09:05:15.921136+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.923321+00:00",
        "etl_stage_id": "d74fbd58-8ff0-4709-86af-e390cdf0d7fe",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469-57-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d7837407-ae56-4daa-bc3e-ce0f68b84a44",
        "created_date": "2020-06-20T09:05:15.921567+00:00",
        "modified_date": "2020-06-20T09:05:15.921567+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.923825+00:00",
        "etl_stage_id": "d7837407-ae56-4daa-bc3e-ce0f68b84a44",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284-245-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "7a0944e4-2f1e-4d80-9b42-863371872505",
        "created_date": "2020-06-20T09:05:15.870104+00:00",
        "modified_date": "2020-06-20T09:05:15.870104+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.922312+00:00",
        "etl_stage_id": "7a0944e4-2f1e-4d80-9b42-863371872505",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781-144-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "d98eae4c-3169-4d47-9b73-a7af6c5ea358",
        "created_date": "2020-06-20T09:05:15.870470+00:00",
        "modified_date": "2020-06-20T09:05:15.870470+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.922817+00:00",
        "etl_stage_id": "d98eae4c-3169-4d47-9b73-a7af6c5ea358",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "375bc5ae-d8ba-40a6-a9de-ce441e8331c8",
        "created_date": "2020-06-20T09:05:15.855261+00:00",
        "modified_date": "2020-06-20T09:05:15.855261+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.921299+00:00",
        "etl_stage_id": "375bc5ae-d8ba-40a6-a9de-ce441e8331c8",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "34df56a7-4eb6-454c-840e-edc22ce6248a",
        "created_date": "2020-06-20T09:05:15.855649+00:00",
        "modified_date": "2020-06-20T09:05:15.855649+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.921807+00:00",
        "etl_stage_id": "34df56a7-4eb6-454c-840e-edc22ce6248a",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "bb4678f3-93f0-46ec-ad3c-bb8154d7c0f5",
        "created_date": "2020-06-20T09:05:15.854732+00:00",
        "modified_date": "2020-06-20T09:05:15.854732+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.920773+00:00",
        "etl_stage_id": "bb4678f3-93f0-46ec-ad3c-bb8154d7c0f5",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.81,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "a072fb97-91ba-4986-8f03-63b8d041244f",
        "created_date": "2020-06-20T09:05:15.825286+00:00",
        "modified_date": "2020-06-20T09:05:15.825286+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.920268+00:00",
        "etl_stage_id": "a072fb97-91ba-4986-8f03-63b8d041244f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "5281a712-cdff-4d0a-8181-757cf26db160",
        "created_date": "2020-06-20T09:05:15.821647+00:00",
        "modified_date": "2020-06-20T09:05:15.821647+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.919762+00:00",
        "etl_stage_id": "5281a712-cdff-4d0a-8181-757cf26db160",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1132",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "3b8a0117-e57b-458a-b080-b7b1dbc2c94b",
        "created_date": "2020-06-20T09:05:15.804718+00:00",
        "modified_date": "2020-06-20T09:05:15.804718+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.919257+00:00",
        "etl_stage_id": "3b8a0117-e57b-458a-b080-b7b1dbc2c94b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962-198-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "45f73bd3-f4b6-41c9-9e3c-6e4c04836aea",
        "created_date": "2020-06-20T09:05:15.799662+00:00",
        "modified_date": "2020-06-20T09:05:15.799662+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.918751+00:00",
        "etl_stage_id": "45f73bd3-f4b6-41c9-9e3c-6e4c04836aea",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306-219-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "6091999e-f6fe-485d-955a-b2bf5bf3186d",
        "created_date": "2020-06-20T09:05:15.773218+00:00",
        "modified_date": "2020-06-20T09:05:15.773218+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.918244+00:00",
        "etl_stage_id": "6091999e-f6fe-485d-955a-b2bf5bf3186d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "7d1629e1-b73d-491f-8918-8586995e66d1",
        "created_date": "2020-06-20T09:05:15.739544+00:00",
        "modified_date": "2020-06-20T09:05:15.739544+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.917230+00:00",
        "etl_stage_id": "7d1629e1-b73d-491f-8918-8586995e66d1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779-142-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "17afa69f-16f3-4039-93f0-90881ef41f21",
        "created_date": "2020-06-20T09:05:15.739962+00:00",
        "modified_date": "2020-06-20T09:05:15.739962+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.917737+00:00",
        "etl_stage_id": "17afa69f-16f3-4039-93f0-90881ef41f21",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-2022",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "27aa9cd8-6c68-4b5d-9095-a94f4a5bc7f9",
        "created_date": "2020-06-20T09:05:15.736721+00:00",
        "modified_date": "2020-06-20T09:05:15.736721+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.916705+00:00",
        "etl_stage_id": "27aa9cd8-6c68-4b5d-9095-a94f4a5bc7f9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "3ec6db8e-e55c-4270-bae6-9472ca462db0",
        "created_date": "2020-06-20T09:05:15.725903+00:00",
        "modified_date": "2020-06-20T09:05:15.725903+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.916198+00:00",
        "etl_stage_id": "3ec6db8e-e55c-4270-bae6-9472ca462db0",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "528583e0-e1a1-4016-a715-ef676a82ae12",
        "created_date": "2020-06-20T09:05:15.711307+00:00",
        "modified_date": "2020-06-20T09:05:15.711307+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.915691+00:00",
        "etl_stage_id": "528583e0-e1a1-4016-a715-ef676a82ae12",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "8ce008d3-b9a5-4bd8-97be-cb034e5b4f71",
        "created_date": "2020-06-20T09:05:15.668121+00:00",
        "modified_date": "2020-06-20T09:05:15.668121+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.915173+00:00",
        "etl_stage_id": "8ce008d3-b9a5-4bd8-97be-cb034e5b4f71",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1993",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "b22b49d3-c3f9-4ec5-8dfa-2caf536774a5",
        "created_date": "2020-06-20T09:05:15.662569+00:00",
        "modified_date": "2020-06-20T09:05:15.662569+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.914145+00:00",
        "etl_stage_id": "b22b49d3-c3f9-4ec5-8dfa-2caf536774a5",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "b67adc51-dbaa-4e2a-b882-4b3f26d9dba4",
        "created_date": "2020-06-20T09:05:15.662910+00:00",
        "modified_date": "2020-06-20T09:05:15.662910+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.914654+00:00",
        "etl_stage_id": "b67adc51-dbaa-4e2a-b882-4b3f26d9dba4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961-197-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "9eb42609-3580-4ed8-aae8-99bd602329f7",
        "created_date": "2020-06-20T09:05:15.637421+00:00",
        "modified_date": "2020-06-20T09:05:15.637421+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.913618+00:00",
        "etl_stage_id": "9eb42609-3580-4ed8-aae8-99bd602329f7",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777-140-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "8add71db-cfa4-44de-9e8c-a7ffb8fd8136",
        "created_date": "2020-06-20T09:05:15.625244+00:00",
        "modified_date": "2020-06-20T09:05:15.625244+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.913105+00:00",
        "etl_stage_id": "8add71db-cfa4-44de-9e8c-a7ffb8fd8136",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305-218-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "0281f2f3-c894-4a59-b879-cb0c6585ced5",
        "created_date": "2020-06-20T09:05:15.624643+00:00",
        "modified_date": "2020-06-20T09:05:15.624643+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.912545+00:00",
        "etl_stage_id": "0281f2f3-c894-4a59-b879-cb0c6585ced5",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1992",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "b966524a-851d-4396-99ca-3c3a8d7df0a9",
        "created_date": "2020-06-20T09:05:15.618233+00:00",
        "modified_date": "2020-06-20T09:05:15.618233+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.911972+00:00",
        "etl_stage_id": "b966524a-851d-4396-99ca-3c3a8d7df0a9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "d5026859-5049-4879-a487-18b055e20551",
        "created_date": "2020-06-20T09:05:15.615803+00:00",
        "modified_date": "2020-06-20T09:05:15.615803+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.911440+00:00",
        "etl_stage_id": "d5026859-5049-4879-a487-18b055e20551",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "a8307552-bd93-4e66-a423-bf5c406ae1e5",
        "created_date": "2020-06-20T09:05:15.550569+00:00",
        "modified_date": "2020-06-20T09:05:15.550569+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.910933+00:00",
        "etl_stage_id": "a8307552-bd93-4e66-a423-bf5c406ae1e5",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777",
        "is_active": true,
        "down_payment": {
            "value": 13,
            "currency": "EUR"
        },
        "id": "33328548-e938-4b51-b630-671156287e47",
        "created_date": "2020-06-20T09:05:15.546813+00:00",
        "modified_date": "2020-06-20T09:05:15.546813+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.910424+00:00",
        "etl_stage_id": "33328548-e938-4b51-b630-671156287e47",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305",
        "is_active": true,
        "down_payment": {
            "value": 35,
            "currency": "EUR"
        },
        "id": "ea6001c6-ab94-4286-bf92-3372cfe09507",
        "created_date": "2020-06-20T09:05:15.545143+00:00",
        "modified_date": "2020-06-20T09:05:15.545143+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.909373+00:00",
        "etl_stage_id": "ea6001c6-ab94-4286-bf92-3372cfe09507",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1991",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "12ac3eb9-6912-4787-abb6-31a3364a114f",
        "created_date": "2020-06-20T09:05:15.545835+00:00",
        "modified_date": "2020-06-20T09:05:15.545835+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.909881+00:00",
        "etl_stage_id": "12ac3eb9-6912-4787-abb6-31a3364a114f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "3e2bb17d-4e6a-4817-8ea6-0dc45ff314eb",
        "created_date": "2020-06-20T09:05:15.523873+00:00",
        "modified_date": "2020-06-20T09:05:15.523873+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.908688+00:00",
        "etl_stage_id": "3e2bb17d-4e6a-4817-8ea6-0dc45ff314eb",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954-190-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "d7911d6c-8405-40b9-8c56-a2bb2f84b2c3",
        "created_date": "2020-06-20T09:05:15.470071+00:00",
        "modified_date": "2020-06-20T09:05:15.470071+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.907737+00:00",
        "etl_stage_id": "d7911d6c-8405-40b9-8c56-a2bb2f84b2c3",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1816",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "ca98dcbe-e27f-4c8d-bd2d-ecc3a269c211",
        "created_date": "2020-06-20T09:05:15.461292+00:00",
        "modified_date": "2020-06-20T09:05:15.461292+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.906787+00:00",
        "etl_stage_id": "ca98dcbe-e27f-4c8d-bd2d-ecc3a269c211",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "e3c40587-8bfd-4734-972b-f21d0d832fbd",
        "created_date": "2020-06-20T09:05:15.436666+00:00",
        "modified_date": "2020-06-20T09:05:15.436666+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.905833+00:00",
        "etl_stage_id": "e3c40587-8bfd-4734-972b-f21d0d832fbd",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "6e81d2b3-8057-48d4-9464-17041aad21dc",
        "created_date": "2020-06-20T09:05:15.417001+00:00",
        "modified_date": "2020-06-20T09:05:15.417001+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.904861+00:00",
        "etl_stage_id": "6e81d2b3-8057-48d4-9464-17041aad21dc",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1731",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "c8d6c135-a6f5-48f0-a453-0fae194d3e9f",
        "created_date": "2020-06-20T09:05:15.402231+00:00",
        "modified_date": "2020-06-20T09:05:15.402231+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.903909+00:00",
        "etl_stage_id": "c8d6c135-a6f5-48f0-a453-0fae194d3e9f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "31625615-01f2-4e2e-adb7-696aa788d203",
        "created_date": "2020-06-20T09:05:15.360638+00:00",
        "modified_date": "2020-06-20T09:05:15.360638+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.902959+00:00",
        "etl_stage_id": "31625615-01f2-4e2e-adb7-696aa788d203",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801-187-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "3f718657-c5af-4ef2-a48e-8b77bb840709",
        "created_date": "2020-06-20T09:05:15.350390+00:00",
        "modified_date": "2020-06-20T09:05:15.350390+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.902007+00:00",
        "etl_stage_id": "3f718657-c5af-4ef2-a48e-8b77bb840709",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1730",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "0fdc5738-3f93-4bb6-9177-0188c97e66c3",
        "created_date": "2020-06-20T09:05:15.342253+00:00",
        "modified_date": "2020-06-20T09:05:15.342253+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.901052+00:00",
        "etl_stage_id": "0fdc5738-3f93-4bb6-9177-0188c97e66c3",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024-241-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "fb76ec9e-7ba9-43ed-998a-f06ea8b092a1",
        "created_date": "2020-06-20T09:05:15.337215+00:00",
        "modified_date": "2020-06-20T09:05:15.337215+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.900088+00:00",
        "etl_stage_id": "fb76ec9e-7ba9-43ed-998a-f06ea8b092a1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "5da03553-49ff-4d19-83b1-1a1fe78000d4",
        "created_date": "2020-06-20T09:05:15.327661+00:00",
        "modified_date": "2020-06-20T09:05:15.327661+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.899137+00:00",
        "etl_stage_id": "5da03553-49ff-4d19-83b1-1a1fe78000d4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1729",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "36694814-c0d1-4572-9483-0ed88cca1f00",
        "created_date": "2020-06-20T09:05:15.320741+00:00",
        "modified_date": "2020-06-20T09:05:15.320741+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.898178+00:00",
        "etl_stage_id": "36694814-c0d1-4572-9483-0ed88cca1f00",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "324398a5-0070-43c0-a4a4-e813da557be4",
        "created_date": "2020-06-20T09:05:15.312545+00:00",
        "modified_date": "2020-06-20T09:05:15.312545+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.897222+00:00",
        "etl_stage_id": "324398a5-0070-43c0-a4a4-e813da557be4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1750",
        "is_active": true,
        "down_payment": {
            "value": 15,
            "currency": "EUR"
        },
        "id": "fa0c5ae0-cc0b-4327-8e4f-fae93af15f78",
        "created_date": "2020-06-20T09:05:15.288653+00:00",
        "modified_date": "2020-06-20T09:05:15.288653+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.896254+00:00",
        "etl_stage_id": "fa0c5ae0-cc0b-4327-8e4f-fae93af15f78",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1728",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "abaa5799-7481-4315-b1eb-9f5df38939c5",
        "created_date": "2020-06-20T09:05:15.285371+00:00",
        "modified_date": "2020-06-20T09:05:15.285371+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.895295+00:00",
        "etl_stage_id": "abaa5799-7481-4315-b1eb-9f5df38939c5",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023-240-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 8,
            "currency": "EUR"
        },
        "id": "925d895e-eb68-48e7-b465-3ebef0dc2c9b",
        "created_date": "2020-06-20T09:05:15.268835+00:00",
        "modified_date": "2020-06-20T09:05:15.268835+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.894339+00:00",
        "etl_stage_id": "925d895e-eb68-48e7-b465-3ebef0dc2c9b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1749",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "01025b41-5662-46d6-962c-a36f546033c4",
        "created_date": "2020-06-20T09:05:15.265156+00:00",
        "modified_date": "2020-06-20T09:05:15.265156+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.892417+00:00",
        "etl_stage_id": "01025b41-5662-46d6-962c-a36f546033c4",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2294",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "699a8878-770f-4fae-8913-f27129e8d586",
        "created_date": "2020-06-20T09:05:15.265607+00:00",
        "modified_date": "2020-06-20T09:05:15.265607+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.893387+00:00",
        "etl_stage_id": "699a8878-770f-4fae-8913-f27129e8d586",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.82,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2291",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "0d3a26c2-bfe5-44b9-bb17-3283e134960b",
        "created_date": "2020-06-20T09:05:15.238285+00:00",
        "modified_date": "2020-06-20T09:05:15.238285+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.890511+00:00",
        "etl_stage_id": "0d3a26c2-bfe5-44b9-bb17-3283e134960b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578-61-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "59053d59-f541-4e4b-8a2e-71aa9b96368f",
        "created_date": "2020-06-20T09:05:15.238856+00:00",
        "modified_date": "2020-06-20T09:05:15.238856+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.891464+00:00",
        "etl_stage_id": "59053d59-f541-4e4b-8a2e-71aa9b96368f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "2059a9a0-398b-4d83-997b-67470da1cac8",
        "created_date": "2020-06-20T09:05:15.214600+00:00",
        "modified_date": "2020-06-20T09:05:15.214600+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.889560+00:00",
        "etl_stage_id": "2059a9a0-398b-4d83-997b-67470da1cac8",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2268",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "5f969423-3ffb-4994-894a-b55c3a6d54c2",
        "created_date": "2020-06-20T09:05:15.209775+00:00",
        "modified_date": "2020-06-20T09:05:15.209775+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.888595+00:00",
        "etl_stage_id": "5f969423-3ffb-4994-894a-b55c3a6d54c2",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478-43-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "a9478d91-5bbf-45e8-b89b-8af055a136a7",
        "created_date": "2020-06-20T09:05:15.173524+00:00",
        "modified_date": "2020-06-20T09:05:15.173524+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.887645+00:00",
        "etl_stage_id": "a9478d91-5bbf-45e8-b89b-8af055a136a7",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1870",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "a3d01d77-a01e-4d8d-8e01-14b260ffa25d",
        "created_date": "2020-06-20T09:05:15.163115+00:00",
        "modified_date": "2020-06-20T09:05:15.163115+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.886695+00:00",
        "etl_stage_id": "a3d01d77-a01e-4d8d-8e01-14b260ffa25d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "3da5c282-00b7-49c5-b1ea-240bb27b69a7",
        "created_date": "2020-06-20T09:05:15.140023+00:00",
        "modified_date": "2020-06-20T09:05:15.140023+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.885744+00:00",
        "etl_stage_id": "3da5c282-00b7-49c5-b1ea-240bb27b69a7",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1869",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "1456a508-00de-47e2-981e-d0fcc6279c0f",
        "created_date": "2020-06-20T09:05:15.127825+00:00",
        "modified_date": "2020-06-20T09:05:15.127825+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.884771+00:00",
        "etl_stage_id": "1456a508-00de-47e2-981e-d0fcc6279c0f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477-42-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "e6534d20-fb1b-4ea0-88ed-247adf91a74d",
        "created_date": "2020-06-20T09:05:15.106752+00:00",
        "modified_date": "2020-06-20T09:05:15.106752+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.883821+00:00",
        "etl_stage_id": "e6534d20-fb1b-4ea0-88ed-247adf91a74d",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1868",
        "is_active": true,
        "down_payment": {
            "value": 10,
            "currency": "EUR"
        },
        "id": "e9956b42-021b-40b8-a248-2f46940c4b79",
        "created_date": "2020-06-20T09:05:15.102300+00:00",
        "modified_date": "2020-06-20T09:05:15.102300+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.882871+00:00",
        "etl_stage_id": "e9956b42-021b-40b8-a248-2f46940c4b79",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "b4f8bd3e-fe3a-4082-9d34-dbcda7757e3b",
        "created_date": "2020-06-20T09:05:15.060824+00:00",
        "modified_date": "2020-06-20T09:05:15.060824+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.881920+00:00",
        "etl_stage_id": "b4f8bd3e-fe3a-4082-9d34-dbcda7757e3b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1867",
        "is_active": true,
        "down_payment": {
            "value": 66,
            "currency": "EUR"
        },
        "id": "c8792d2c-0e27-44cb-8532-7a468e966770",
        "created_date": "2020-06-20T09:05:15.046002+00:00",
        "modified_date": "2020-06-20T09:05:15.046002+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.880953+00:00",
        "etl_stage_id": "c8792d2c-0e27-44cb-8532-7a468e966770",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476-47-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "916aa533-5106-4a40-867c-ed8f4099466c",
        "created_date": "2020-06-20T09:05:15.030217+00:00",
        "modified_date": "2020-06-20T09:05:15.030217+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.880004+00:00",
        "etl_stage_id": "916aa533-5106-4a40-867c-ed8f4099466c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1866",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "31341186-93f9-4f46-86d9-22c865296e4f",
        "created_date": "2020-06-20T09:05:15.012889+00:00",
        "modified_date": "2020-06-20T09:05:15.012889+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.879053+00:00",
        "etl_stage_id": "31341186-93f9-4f46-86d9-22c865296e4f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "93eb2aa9-9686-4bd7-bc34-000cc1a75bde",
        "created_date": "2020-06-20T09:05:14.999836+00:00",
        "modified_date": "2020-06-20T09:05:14.999836+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.878103+00:00",
        "etl_stage_id": "93eb2aa9-9686-4bd7-bc34-000cc1a75bde",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1865",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "1b6cd781-9188-4d09-806a-82b6a3039137",
        "created_date": "2020-06-20T09:05:14.969568+00:00",
        "modified_date": "2020-06-20T09:05:14.969568+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.877152+00:00",
        "etl_stage_id": "1b6cd781-9188-4d09-806a-82b6a3039137",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475-46-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "eac47ae1-81b2-4995-95d3-3e49c6de00fe",
        "created_date": "2020-06-20T09:05:14.956603+00:00",
        "modified_date": "2020-06-20T09:05:14.956603+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.876186+00:00",
        "etl_stage_id": "eac47ae1-81b2-4995-95d3-3e49c6de00fe",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1864",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "6ce9d94e-49e0-4b23-a22d-9248b9136de1",
        "created_date": "2020-06-20T09:05:14.946979+00:00",
        "modified_date": "2020-06-20T09:05:14.946979+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.875226+00:00",
        "etl_stage_id": "6ce9d94e-49e0-4b23-a22d-9248b9136de1",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475",
        "is_active": true,
        "down_payment": {
            "value": 104,
            "currency": "EUR"
        },
        "id": "f37552aa-4f54-499f-aef3-4424950fb04f",
        "created_date": "2020-06-20T09:05:14.929883+00:00",
        "modified_date": "2020-06-20T09:05:14.929883+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.874273+00:00",
        "etl_stage_id": "f37552aa-4f54-499f-aef3-4424950fb04f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1863",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "2aae4e11-f2b0-4d96-ad2e-297fa9a1b7d3",
        "created_date": "2020-06-20T09:05:14.924165+00:00",
        "modified_date": "2020-06-20T09:05:14.924165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.873323+00:00",
        "etl_stage_id": "2aae4e11-f2b0-4d96-ad2e-297fa9a1b7d3",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1862",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "6635737e-bca1-4370-b691-5b3e175224b9",
        "created_date": "2020-06-20T09:05:14.856965+00:00",
        "modified_date": "2020-06-20T09:05:14.856965+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.872358+00:00",
        "etl_stage_id": "6635737e-bca1-4370-b691-5b3e175224b9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1861",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "7f7f0426-e739-4916-afdb-56f80a5d8e41",
        "created_date": "2020-06-20T09:05:14.832794+00:00",
        "modified_date": "2020-06-20T09:05:14.832794+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.871408+00:00",
        "etl_stage_id": "7f7f0426-e739-4916-afdb-56f80a5d8e41",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1989",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "fe9b15fc-c959-42e3-bac5-efd7150f16c9",
        "created_date": "2020-06-20T09:05:14.804831+00:00",
        "modified_date": "2020-06-20T09:05:14.804831+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.870458+00:00",
        "etl_stage_id": "fe9b15fc-c959-42e3-bac5-efd7150f16c9",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1988",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "98f44932-29d9-4416-bc52-9c1a53df49e2",
        "created_date": "2020-06-20T09:05:14.764738+00:00",
        "modified_date": "2020-06-20T09:05:14.764738+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.869504+00:00",
        "etl_stage_id": "98f44932-29d9-4416-bc52-9c1a53df49e2",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1987",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "753acf3a-fbc9-41c7-9ae9-910bf4cbaca2",
        "created_date": "2020-06-20T09:05:14.739932+00:00",
        "modified_date": "2020-06-20T09:05:14.739932+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.868529+00:00",
        "etl_stage_id": "753acf3a-fbc9-41c7-9ae9-910bf4cbaca2",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1986",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "5dc13ad6-ad09-448c-b0dd-0ccd135b623f",
        "created_date": "2020-06-20T09:05:14.716501+00:00",
        "modified_date": "2020-06-20T09:05:14.716501+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.867580+00:00",
        "etl_stage_id": "5dc13ad6-ad09-448c-b0dd-0ccd135b623f",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1985",
        "is_active": true,
        "down_payment": {
            "value": 7,
            "currency": "EUR"
        },
        "id": "d95d4c8e-8075-4596-8caa-8d11aa692f61",
        "created_date": "2020-06-20T09:05:14.681697+00:00",
        "modified_date": "2020-06-20T09:05:14.681697+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.866629+00:00",
        "etl_stage_id": "d95d4c8e-8075-4596-8caa-8d11aa692f61",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1984",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "7521a744-6d0a-4d8e-87a8-187a8addf923",
        "created_date": "2020-06-20T09:05:14.659000+00:00",
        "modified_date": "2020-06-20T09:05:14.659000+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.865673+00:00",
        "etl_stage_id": "7521a744-6d0a-4d8e-87a8-187a8addf923",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1983",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "c5760880-ceb7-4d06-88a2-205f1015eb6c",
        "created_date": "2020-06-20T09:05:14.643961+00:00",
        "modified_date": "2020-06-20T09:05:14.643961+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.864695+00:00",
        "etl_stage_id": "c5760880-ceb7-4d06-88a2-205f1015eb6c",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.83,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1982",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "f047aca7-b53f-4723-ab98-46a064dc0a7b",
        "created_date": "2020-06-20T09:05:14.631637+00:00",
        "modified_date": "2020-06-20T09:05:14.631637+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.863741+00:00",
        "etl_stage_id": "f047aca7-b53f-4723-ab98-46a064dc0a7b",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1981",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "8c62419f-e895-4e1c-a266-fe0f01cb5648",
        "created_date": "2020-06-20T09:05:14.618753+00:00",
        "modified_date": "2020-06-20T09:05:14.618753+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.862787+00:00",
        "etl_stage_id": "8c62419f-e895-4e1c-a266-fe0f01cb5648",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1980",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "31ff31a4-42d8-4763-8e62-814a65439635",
        "created_date": "2020-06-20T09:05:14.593623+00:00",
        "modified_date": "2020-06-20T09:05:14.593623+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.861828+00:00",
        "etl_stage_id": "31ff31a4-42d8-4763-8e62-814a65439635",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1979",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "b98c0027-d19b-4c07-b580-1e29b1caef94",
        "created_date": "2020-06-20T09:05:14.578225+00:00",
        "modified_date": "2020-06-20T09:05:14.578225+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.860853+00:00",
        "etl_stage_id": "b98c0027-d19b-4c07-b580-1e29b1caef94",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1978",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "35e57b59-fe8b-41d9-959a-7d6f4dc0d1d2",
        "created_date": "2020-06-20T09:05:14.563547+00:00",
        "modified_date": "2020-06-20T09:05:14.563547+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.859896+00:00",
        "etl_stage_id": "35e57b59-fe8b-41d9-959a-7d6f4dc0d1d2",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1887",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "ade56e29-5eb7-496c-bdb6-dc5a407ddef3",
        "created_date": "2020-06-20T09:05:14.551284+00:00",
        "modified_date": "2020-06-20T09:05:14.551284+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.858934+00:00",
        "etl_stage_id": "ade56e29-5eb7-496c-bdb6-dc5a407ddef3",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1885",
        "is_active": true,
        "down_payment": {
            "value": 6.99,
            "currency": "EUR"
        },
        "id": "42047e8a-d76c-42c9-8c0d-cad7c1ab6335",
        "created_date": "2020-06-20T09:05:14.542176+00:00",
        "modified_date": "2020-06-20T09:05:14.542176+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-20T09:12:11.857963+00:00",
        "etl_stage_id": "42047e8a-d76c-42c9-8c0d-cad7c1ab6335",
        "etl_indexed_at": "2020-06-20T09:16:04.741821+00:00",
        "indexing_delay_in_minutes": 10.84,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "4654d139-d4f6-4c38-8b84-1086194a8e20",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.686190+00:00",
        "etl_stage_id": "4654d139-d4f6-4c38-8b84-1086194a8e20",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 299,
            "currency": "EUR"
        },
        "id": "122ab6bc-2435-4f14-b2d4-591f2c7583d1",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.076339+00:00",
        "etl_stage_id": "122ab6bc-2435-4f14-b2d4-591f2c7583d1",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 299,
            "currency": "EUR"
        },
        "id": "12a10abf-5c84-4c83-9e31-64d5721da963",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.060908+00:00",
        "etl_stage_id": "12a10abf-5c84-4c83-9e31-64d5721da963",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "ab9d2579-4c81-4472-88ed-74cf55da3141",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.687174+00:00",
        "etl_stage_id": "ab9d2579-4c81-4472-88ed-74cf55da3141",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 333,
            "currency": "EUR"
        },
        "id": "96f0fa64-bc88-4333-b29c-ea3c4c27790b",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.077308+00:00",
        "etl_stage_id": "96f0fa64-bc88-4333-b29c-ea3c4c27790b",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G985FZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 333,
            "currency": "EUR"
        },
        "id": "0b3d3642-718a-4846-b4a5-d154036acbed",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.061890+00:00",
        "etl_stage_id": "0b3d3642-718a-4846-b4a5-d154036acbed",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BZIDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "9c896951-9412-42be-b0db-f260e99bdf19",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.691004+00:00",
        "etl_stage_id": "9c896951-9412-42be-b0db-f260e99bdf19",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BZIDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 229,
            "currency": "EUR"
        },
        "id": "08545fd6-f194-4abb-a86f-10d259282bfd",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.081194+00:00",
        "etl_stage_id": "08545fd6-f194-4abb-a86f-10d259282bfd",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BZIDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 229,
            "currency": "EUR"
        },
        "id": "1f45ba14-3653-40ac-aa7a-9bdbf20b78ee",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.065800+00:00",
        "etl_stage_id": "1f45ba14-3653-40ac-aa7a-9bdbf20b78ee",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "6c6a37c1-71bb-4351-87a6-bdcc72d21052",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.691949+00:00",
        "etl_stage_id": "6c6a37c1-71bb-4351-87a6-bdcc72d21052",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 229,
            "currency": "EUR"
        },
        "id": "71f1d003-36fb-4c4d-8ab4-1e2e7612e85a",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.082148+00:00",
        "etl_stage_id": "71f1d003-36fb-4c4d-8ab4-1e2e7612e85a",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 229,
            "currency": "EUR"
        },
        "id": "f379cda7-fd0b-49f4-9428-48b25140c623",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.066764+00:00",
        "etl_stage_id": "f379cda7-fd0b-49f4-9428-48b25140c623",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "e2f4d476-9244-4027-b317-6f49d4a08cbd",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.692881+00:00",
        "etl_stage_id": "e2f4d476-9244-4027-b317-6f49d4a08cbd",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 229,
            "currency": "EUR"
        },
        "id": "411eca01-2c8e-4f5e-8ad5-2cf6b0a19c8e",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.083101+00:00",
        "etl_stage_id": "411eca01-2c8e-4f5e-8ad5-2cf6b0a19c8e",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G981BLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 229,
            "currency": "EUR"
        },
        "id": "cee8b4a4-e347-42cf-94be-107dbb6ec2c8",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.067718+00:00",
        "etl_stage_id": "cee8b4a4-e347-42cf-94be-107dbb6ec2c8",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FZIDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "7f99c84b-b9cd-493d-8cfd-22369b30f355",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.693837+00:00",
        "etl_stage_id": "7f99c84b-b9cd-493d-8cfd-22369b30f355",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FZIDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 169,
            "currency": "EUR"
        },
        "id": "adfb0e83-0057-4013-8d5d-4d959a49ccaf",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.084053+00:00",
        "etl_stage_id": "adfb0e83-0057-4013-8d5d-4d959a49ccaf",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FZIDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 169,
            "currency": "EUR"
        },
        "id": "cf97b690-7e9d-488e-b0f9-7b304a4194e1",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.068672+00:00",
        "etl_stage_id": "cf97b690-7e9d-488e-b0f9-7b304a4194e1",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "1328e2ca-dd0f-4832-be06-1a3ffce0660d",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.694768+00:00",
        "etl_stage_id": "1328e2ca-dd0f-4832-be06-1a3ffce0660d",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 169,
            "currency": "EUR"
        },
        "id": "de8af98a-bcab-4437-8b60-90ef8c2803ea",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.085017+00:00",
        "etl_stage_id": "de8af98a-bcab-4437-8b60-90ef8c2803ea",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 169,
            "currency": "EUR"
        },
        "id": "e1c56ec2-4aad-461d-a7af-002635e989de",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.069642+00:00",
        "etl_stage_id": "e1c56ec2-4aad-461d-a7af-002635e989de",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "3153a6fc-8cd8-460c-b030-da5d5523a85f",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.695707+00:00",
        "etl_stage_id": "3153a6fc-8cd8-460c-b030-da5d5523a85f",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 169,
            "currency": "EUR"
        },
        "id": "8fa0ec82-9cc9-418d-a4c2-f631f5b42acb",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.085984+00:00",
        "etl_stage_id": "8fa0ec82-9cc9-418d-a4c2-f631f5b42acb",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G980FLBDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 169,
            "currency": "EUR"
        },
        "id": "098c167a-195f-4e13-8e39-859bc8506157",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.054097+00:00",
        "etl_stage_id": "098c167a-195f-4e13-8e39-859bc8506157",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZWDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "4dd2684c-fa5d-4c3a-885b-2ea2dfa41f4f",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.696637+00:00",
        "etl_stage_id": "4dd2684c-fa5d-4c3a-885b-2ea2dfa41f4f",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZWDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 549,
            "currency": "EUR"
        },
        "id": "5c0212d8-eeb3-451a-a30a-3a983aca3a77",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.070595+00:00",
        "etl_stage_id": "5c0212d8-eeb3-451a-a30a-3a983aca3a77",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZWDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 549,
            "currency": "EUR"
        },
        "id": "19d59be4-3281-4dfa-9e71-fb2104070aed",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.055111+00:00",
        "etl_stage_id": "19d59be4-3281-4dfa-9e71-fb2104070aed",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZKGEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "532dd916-6dbf-45c7-8f63-25db20cf1028",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.697588+00:00",
        "etl_stage_id": "532dd916-6dbf-45c7-8f63-25db20cf1028",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "7688507b-ffba-4c0f-a998-c13ef4b2a37f",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.698516+00:00",
        "etl_stage_id": "7688507b-ffba-4c0f-a998-c13ef4b2a37f",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 549,
            "currency": "EUR"
        },
        "id": "7807be96-5db3-49d7-ac0f-7643ae076e52",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.071549+00:00",
        "etl_stage_id": "7807be96-5db3-49d7-ac0f-7643ae076e52",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 549,
            "currency": "EUR"
        },
        "id": "47daa8b0-034e-49bd-9bb1-99e3399e45d3",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.056091+00:00",
        "etl_stage_id": "47daa8b0-034e-49bd-9bb1-99e3399e45d3",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "82c367b9-bd6f-4a96-ad39-9c7f797b42c9",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.699443+00:00",
        "etl_stage_id": "82c367b9-bd6f-4a96-ad39-9c7f797b42c9",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 549,
            "currency": "EUR"
        },
        "id": "4ce52de2-7f64-4370-bd0b-8a961814a8b3",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.072501+00:00",
        "etl_stage_id": "4ce52de2-7f64-4370-bd0b-8a961814a8b3",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G988BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 549,
            "currency": "EUR"
        },
        "id": "d8b625c0-8841-4577-ae86-144d63a5488d",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.057073+00:00",
        "etl_stage_id": "d8b625c0-8841-4577-ae86-144d63a5488d",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZKGEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "1c7b6e47-c723-4289-97fe-6fe33bfb3a4f",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.700372+00:00",
        "etl_stage_id": "1c7b6e47-c723-4289-97fe-6fe33bfb3a4f",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZKGEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 449,
            "currency": "EUR"
        },
        "id": "d8d52747-b6a8-44b3-bee4-567aa7d7d3c6",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.073469+00:00",
        "etl_stage_id": "d8d52747-b6a8-44b3-bee4-567aa7d7d3c6",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZKGEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 449,
            "currency": "EUR"
        },
        "id": "2fc02e53-b7fd-4ee7-89f4-103cea1e7501",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.058038+00:00",
        "etl_stage_id": "2fc02e53-b7fd-4ee7-89f4-103cea1e7501",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "bbecbad8-01ca-4005-afc6-ad15ec96ae21",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.701324+00:00",
        "etl_stage_id": "bbecbad8-01ca-4005-afc6-ad15ec96ae21",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 299,
            "currency": "EUR"
        },
        "id": "d9ce9d08-2c00-44ff-81e9-08b9fdc0b531",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.074423+00:00",
        "etl_stage_id": "d9ce9d08-2c00-44ff-81e9-08b9fdc0b531",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZKDEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 299,
            "currency": "EUR"
        },
        "id": "7b775809-44d5-4485-89e8-3b9659b76ebd",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.058995+00:00",
        "etl_stage_id": "7b775809-44d5-4485-89e8-3b9659b76ebd",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 123,
            "currency": "EUR"
        },
        "id": "ef69cddf-894a-4634-8602-a8da35240483",
        "created_date": "2020-06-24T14:41:37.167295+00:00",
        "modified_date": "2020-06-24T14:41:37.167295+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:51:44.702257+00:00",
        "etl_stage_id": "ef69cddf-894a-4634-8602-a8da35240483",
        "etl_indexed_at": "2020-06-24T14:55:21.783748+00:00",
        "indexing_delay_in_minutes": 13.74,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 299,
            "currency": "EUR"
        },
        "id": "713dbe94-73a3-465b-88db-5a98404c5357",
        "created_date": "2020-06-24T14:24:47.624169+00:00",
        "modified_date": "2020-06-24T14:24:47.624169+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.075384+00:00",
        "etl_stage_id": "713dbe94-73a3-465b-88db-5a98404c5357",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-G986BZADEUB",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 299,
            "currency": "EUR"
        },
        "id": "9d43abab-3e3c-474b-b6ae-2709c4f6f9d0",
        "created_date": "2020-06-24T14:24:47.495365+00:00",
        "modified_date": "2020-06-24T14:24:47.495365+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-06-24T14:29:30.059953+00:00",
        "etl_stage_id": "9d43abab-3e3c-474b-b6ae-2709c4f6f9d0",
        "etl_indexed_at": "2020-06-24T14:33:13.151322+00:00",
        "indexing_delay_in_minutes": 8.43,
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474-53-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c322f6e3-c9e1-4712-8429-f4a351f1e071",
        "created_date": "2020-05-12T17:31:12.018776+00:00",
        "modified_date": "2020-05-12T17:31:12.018776+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.978239+00:00",
        "etl_stage_id": "c322f6e3-c9e1-4712-8429-f4a351f1e071",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fa01d486-96e7-4126-84ca-8c96352834cf",
        "created_date": "2020-05-12T17:31:11.523971+00:00",
        "modified_date": "2020-05-12T17:31:11.523971+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.974834+00:00",
        "etl_stage_id": "fa01d486-96e7-4126-84ca-8c96352834cf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775-138-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "04b093b8-e7a1-4403-a0ca-d152d586618c",
        "created_date": "2020-05-12T17:31:11.458096+00:00",
        "modified_date": "2020-05-12T17:31:11.458096+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.959793+00:00",
        "etl_stage_id": "04b093b8-e7a1-4403-a0ca-d152d586618c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473-51-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cebd9af2-45f2-4fc5-9577-fba9af815dc2",
        "created_date": "2020-05-12T17:31:10.848006+00:00",
        "modified_date": "2020-05-12T17:31:10.848006+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.937530+00:00",
        "etl_stage_id": "cebd9af2-45f2-4fc5-9577-fba9af815dc2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2d493f88-4845-42a8-8d4a-0277a598011a",
        "created_date": "2020-05-12T17:31:10.747616+00:00",
        "modified_date": "2020-05-12T17:31:10.747616+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.915155+00:00",
        "etl_stage_id": "2d493f88-4845-42a8-8d4a-0277a598011a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773-136-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bb80e063-d0ae-4673-b47e-8facdd73d3d6",
        "created_date": "2020-05-12T17:31:10.321394+00:00",
        "modified_date": "2020-05-12T17:31:10.321394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.892256+00:00",
        "etl_stage_id": "bb80e063-d0ae-4673-b47e-8facdd73d3d6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a1de9a17-8649-48ba-b81d-02e431bd2fa9",
        "created_date": "2020-05-12T17:31:10.149863+00:00",
        "modified_date": "2020-05-12T17:31:10.149863+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.868385+00:00",
        "etl_stage_id": "a1de9a17-8649-48ba-b81d-02e431bd2fa9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472-52-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "72fdbec9-f44e-4dfd-a614-b3766d7fcec1",
        "created_date": "2020-05-12T17:31:09.779713+00:00",
        "modified_date": "2020-05-12T17:31:09.779713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.857399+00:00",
        "etl_stage_id": "72fdbec9-f44e-4dfd-a614-b3766d7fcec1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7c31b84d-28b0-4ec1-8964-236f3fa6857f",
        "created_date": "2020-05-12T17:31:09.649164+00:00",
        "modified_date": "2020-05-12T17:31:09.649164+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.843836+00:00",
        "etl_stage_id": "7c31b84d-28b0-4ec1-8964-236f3fa6857f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6c5b9e8c-256c-4a55-b16b-d8eed979c96f",
        "created_date": "2020-05-12T17:31:09.409653+00:00",
        "modified_date": "2020-05-12T17:31:09.409653+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.822206+00:00",
        "etl_stage_id": "6c5b9e8c-256c-4a55-b16b-d8eed979c96f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-237-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e8485638-6ae2-47ce-8667-47be931e0f76",
        "created_date": "2020-05-12T17:31:09.215713+00:00",
        "modified_date": "2020-05-12T17:31:09.215713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.809797+00:00",
        "etl_stage_id": "e8485638-6ae2-47ce-8667-47be931e0f76",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471-58-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "70b7c262-2c66-4086-9a72-d83f21e27d69",
        "created_date": "2020-05-12T17:31:08.626956+00:00",
        "modified_date": "2020-05-12T17:31:08.626956+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.797510+00:00",
        "etl_stage_id": "70b7c262-2c66-4086-9a72-d83f21e27d69",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-163-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a2fe88bd-fd04-4cdb-9120-ef6508afb1a2",
        "created_date": "2020-05-12T17:31:08.322568+00:00",
        "modified_date": "2020-05-12T17:31:08.322568+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.776675+00:00",
        "etl_stage_id": "a2fe88bd-fd04-4cdb-9120-ef6508afb1a2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "11fd8f2c-0acc-41e5-9a82-8239851acda3",
        "created_date": "2020-05-12T17:31:08.140562+00:00",
        "modified_date": "2020-05-12T17:31:08.140562+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.751752+00:00",
        "etl_stage_id": "11fd8f2c-0acc-41e5-9a82-8239851acda3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f22352b9-611c-4385-ae10-9b348803e4a0",
        "created_date": "2020-05-12T17:31:08.102175+00:00",
        "modified_date": "2020-05-12T17:31:08.102175+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.730084+00:00",
        "etl_stage_id": "f22352b9-611c-4385-ae10-9b348803e4a0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2007",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4476adc5-b3a8-4610-be15-ac670cad866e",
        "created_date": "2020-05-12T17:31:07.894394+00:00",
        "modified_date": "2020-05-12T17:31:07.894394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.717957+00:00",
        "etl_stage_id": "4476adc5-b3a8-4610-be15-ac670cad866e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0ebe6f94-e190-47b2-8f7f-cc21dc906f07",
        "created_date": "2020-05-12T17:31:07.784330+00:00",
        "modified_date": "2020-05-12T17:31:07.784330+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.705789+00:00",
        "etl_stage_id": "0ebe6f94-e190-47b2-8f7f-cc21dc906f07",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470-55-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0dacb1ab-eb83-4a01-bb4f-674ce8f89e6b",
        "created_date": "2020-05-12T17:31:07.499125+00:00",
        "modified_date": "2020-05-12T17:31:07.499125+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.694355+00:00",
        "etl_stage_id": "0dacb1ab-eb83-4a01-bb4f-674ce8f89e6b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2006",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "19517466-70f8-401f-bbbd-b5fae054713d",
        "created_date": "2020-05-12T17:31:07.475809+00:00",
        "modified_date": "2020-05-12T17:31:07.475809+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.680730+00:00",
        "etl_stage_id": "19517466-70f8-401f-bbbd-b5fae054713d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-242-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cb467a93-d741-4152-a333-b457f3b5d0ed",
        "created_date": "2020-05-12T17:31:07.202652+00:00",
        "modified_date": "2020-05-12T17:31:07.202652+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.659216+00:00",
        "etl_stage_id": "cb467a93-d741-4152-a333-b457f3b5d0ed",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "69547094-175d-465c-a446-520a6ddbd739",
        "created_date": "2020-05-12T17:31:07.052037+00:00",
        "modified_date": "2020-05-12T17:31:07.052037+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.646363+00:00",
        "etl_stage_id": "69547094-175d-465c-a446-520a6ddbd739",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-161-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "52abdaf1-5352-4f68-8659-0fdcfa74e3c6",
        "created_date": "2020-05-12T17:31:06.655325+00:00",
        "modified_date": "2020-05-12T17:31:06.655325+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.634158+00:00",
        "etl_stage_id": "52abdaf1-5352-4f68-8659-0fdcfa74e3c6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2005",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b142a158-01d5-47fd-900a-0999ea794f98",
        "created_date": "2020-05-12T17:31:06.575659+00:00",
        "modified_date": "2020-05-12T17:31:06.575659+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.620697+00:00",
        "etl_stage_id": "b142a158-01d5-47fd-900a-0999ea794f98",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469-57-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d25731c7-323e-4aa9-9ba9-a4b6f889d366",
        "created_date": "2020-05-12T17:31:06.486170+00:00",
        "modified_date": "2020-05-12T17:31:06.486170+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.598840+00:00",
        "etl_stage_id": "d25731c7-323e-4aa9-9ba9-a4b6f889d366",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1b0212d3-ac29-4648-8fdc-c88e14ed2c9f",
        "created_date": "2020-05-12T17:31:06.167498+00:00",
        "modified_date": "2020-05-12T17:31:06.167498+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.585960+00:00",
        "etl_stage_id": "1b0212d3-ac29-4648-8fdc-c88e14ed2c9f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8ac7161d-9e1e-46e4-aaf3-dd1b094f9802",
        "created_date": "2020-05-12T17:31:05.990122+00:00",
        "modified_date": "2020-05-12T17:31:05.990122+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.574451+00:00",
        "etl_stage_id": "8ac7161d-9e1e-46e4-aaf3-dd1b094f9802",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2004",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b13a873e-11fd-44c1-95c2-a6964627307b",
        "created_date": "2020-05-12T17:31:05.946870+00:00",
        "modified_date": "2020-05-12T17:31:05.946870+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.556068+00:00",
        "etl_stage_id": "b13a873e-11fd-44c1-95c2-a6964627307b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304-217-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1d3fb61d-c178-4f6d-9c08-e448ae1b5fbe",
        "created_date": "2020-05-12T17:31:05.856646+00:00",
        "modified_date": "2020-05-12T17:31:05.856646+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.546582+00:00",
        "etl_stage_id": "1d3fb61d-c178-4f6d-9c08-e448ae1b5fbe",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761-153-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3392f58c-a4e2-4123-b5e6-cb4296d0731c",
        "created_date": "2020-05-12T17:31:05.536677+00:00",
        "modified_date": "2020-05-12T17:31:05.536677+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.526406+00:00",
        "etl_stage_id": "3392f58c-a4e2-4123-b5e6-cb4296d0731c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2003",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "53ea636d-3e31-449f-b239-013e815ae649",
        "created_date": "2020-05-12T17:31:05.463603+00:00",
        "modified_date": "2020-05-12T17:31:05.463603+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.514870+00:00",
        "etl_stage_id": "53ea636d-3e31-449f-b239-013e815ae649",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2e591c55-5b47-4b63-ac22-a97147234f6d",
        "created_date": "2020-05-12T17:31:05.354095+00:00",
        "modified_date": "2020-05-12T17:31:05.354095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.503410+00:00",
        "etl_stage_id": "2e591c55-5b47-4b63-ac22-a97147234f6d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2002",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a5754d71-1230-4460-baf9-e47c85c9e835",
        "created_date": "2020-05-12T17:31:04.932282+00:00",
        "modified_date": "2020-05-12T17:31:04.932282+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.491335+00:00",
        "etl_stage_id": "a5754d71-1230-4460-baf9-e47c85c9e835",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1132",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "deafe1d4-54cd-4412-9168-f10100b3f1a7",
        "created_date": "2020-05-12T17:31:04.855004+00:00",
        "modified_date": "2020-05-12T17:31:04.855004+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.479241+00:00",
        "etl_stage_id": "deafe1d4-54cd-4412-9168-f10100b3f1a7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "10ea05d7-8673-441e-93e9-036cabe81665",
        "created_date": "2020-05-12T17:31:04.461154+00:00",
        "modified_date": "2020-05-12T17:31:04.461154+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.458085+00:00",
        "etl_stage_id": "10ea05d7-8673-441e-93e9-036cabe81665",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9394ede7-33f0-4aee-b95a-ed720b497166",
        "created_date": "2020-05-12T17:31:04.323227+00:00",
        "modified_date": "2020-05-12T17:31:04.323227+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.433150+00:00",
        "etl_stage_id": "9394ede7-33f0-4aee-b95a-ed720b497166",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-2022",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ba2a7e5f-c4b5-4a54-8f36-b9a0ae873792",
        "created_date": "2020-05-12T17:31:04.295608+00:00",
        "modified_date": "2020-05-12T17:31:04.295608+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.422385+00:00",
        "etl_stage_id": "ba2a7e5f-c4b5-4a54-8f36-b9a0ae873792",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303-216-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e894333a-fd41-424e-8098-9aca3dcca498",
        "created_date": "2020-05-12T17:31:04.101588+00:00",
        "modified_date": "2020-05-12T17:31:04.101588+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.410170+00:00",
        "etl_stage_id": "e894333a-fd41-424e-8098-9aca3dcca498",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8d515577-8e7f-40e7-a5a8-73c5adb6e027",
        "created_date": "2020-05-12T17:31:03.769403+00:00",
        "modified_date": "2020-05-12T17:31:03.769403+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.388464+00:00",
        "etl_stage_id": "8d515577-8e7f-40e7-a5a8-73c5adb6e027",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1993",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9a53aca3-5f3a-49d4-9fab-8f985dd11ae2",
        "created_date": "2020-05-12T17:31:03.690072+00:00",
        "modified_date": "2020-05-12T17:31:03.690072+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.375456+00:00",
        "etl_stage_id": "9a53aca3-5f3a-49d4-9fab-8f985dd11ae2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fbdd9543-91a9-48ae-b0fe-29b52a679127",
        "created_date": "2020-05-12T17:31:03.399880+00:00",
        "modified_date": "2020-05-12T17:31:03.399880+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.364491+00:00",
        "etl_stage_id": "fbdd9543-91a9-48ae-b0fe-29b52a679127",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7e72f02b-bb8c-4d33-aa90-9d7896614d64",
        "created_date": "2020-05-12T17:31:03.227418+00:00",
        "modified_date": "2020-05-12T17:31:03.227418+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.348030+00:00",
        "etl_stage_id": "7e72f02b-bb8c-4d33-aa90-9d7896614d64",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759-151-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2874ef03-33c2-44a1-a056-e794320a2392",
        "created_date": "2020-05-12T17:31:03.219861+00:00",
        "modified_date": "2020-05-12T17:31:03.219861+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.333469+00:00",
        "etl_stage_id": "2874ef03-33c2-44a1-a056-e794320a2392",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1992",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f06825b3-ed77-4c48-bfa6-369247b306cd",
        "created_date": "2020-05-12T17:31:02.984007+00:00",
        "modified_date": "2020-05-12T17:31:02.984007+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.306891+00:00",
        "etl_stage_id": "f06825b3-ed77-4c48-bfa6-369247b306cd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a8d3dccf-6ae7-470c-a1d3-eb492c9bc441",
        "created_date": "2020-05-12T17:31:02.607132+00:00",
        "modified_date": "2020-05-12T17:31:02.607132+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.298023+00:00",
        "etl_stage_id": "a8d3dccf-6ae7-470c-a1d3-eb492c9bc441",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "564e1bda-1380-4cd1-ab00-b9832dfead7f",
        "created_date": "2020-05-12T17:31:02.449279+00:00",
        "modified_date": "2020-05-12T17:31:02.449279+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.289070+00:00",
        "etl_stage_id": "564e1bda-1380-4cd1-ab00-b9832dfead7f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302-215-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dcc4c6eb-afe7-4c16-be70-887ee32c6e2f",
        "created_date": "2020-05-12T17:31:02.314591+00:00",
        "modified_date": "2020-05-12T17:31:02.314591+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.271157+00:00",
        "etl_stage_id": "dcc4c6eb-afe7-4c16-be70-887ee32c6e2f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757-149-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "74c3af3f-29c6-4b05-8729-2051f6127689",
        "created_date": "2020-05-12T17:31:01.943047+00:00",
        "modified_date": "2020-05-12T17:31:01.943047+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.250951+00:00",
        "etl_stage_id": "74c3af3f-29c6-4b05-8729-2051f6127689",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c76f361c-6186-46c0-ae5b-a88629106d02",
        "created_date": "2020-05-12T17:31:01.895910+00:00",
        "modified_date": "2020-05-12T17:31:01.895910+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.242696+00:00",
        "etl_stage_id": "c76f361c-6186-46c0-ae5b-a88629106d02",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1991",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "12b8946b-e3bc-4fe6-b1cf-c43d0a768d8d",
        "created_date": "2020-05-12T17:31:01.820002+00:00",
        "modified_date": "2020-05-12T17:31:01.820002+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.223889+00:00",
        "etl_stage_id": "12b8946b-e3bc-4fe6-b1cf-c43d0a768d8d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5948614f-db94-4846-9c66-666be5ae5d76",
        "created_date": "2020-05-12T17:31:01.777512+00:00",
        "modified_date": "2020-05-12T17:31:01.777512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.203592+00:00",
        "etl_stage_id": "5948614f-db94-4846-9c66-666be5ae5d76",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a1a45e69-18d0-4ae8-84aa-d7fe816357cb",
        "created_date": "2020-05-12T17:31:01.455804+00:00",
        "modified_date": "2020-05-12T17:31:01.455804+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.192057+00:00",
        "etl_stage_id": "a1a45e69-18d0-4ae8-84aa-d7fe816357cb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1816",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "df83abd3-9901-4991-be6e-b884275f85c2",
        "created_date": "2020-05-12T17:31:01.405984+00:00",
        "modified_date": "2020-05-12T17:31:01.405984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.180047+00:00",
        "etl_stage_id": "df83abd3-9901-4991-be6e-b884275f85c2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301-210-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a378a984-cbf3-4644-a0ef-cdd28ec9887f",
        "created_date": "2020-05-12T17:31:01.228531+00:00",
        "modified_date": "2020-05-12T17:31:01.228531+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.168596+00:00",
        "etl_stage_id": "a378a984-cbf3-4644-a0ef-cdd28ec9887f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755-169-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7acc0479-e129-4af3-9d98-97f1628c8b3c",
        "created_date": "2020-05-12T17:31:00.875271+00:00",
        "modified_date": "2020-05-12T17:31:00.875271+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.155668+00:00",
        "etl_stage_id": "7acc0479-e129-4af3-9d98-97f1628c8b3c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7d5f8b05-b8ef-421a-9fd9-9bb03de8dd8a",
        "created_date": "2020-05-12T17:31:00.838595+00:00",
        "modified_date": "2020-05-12T17:31:00.838595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.134836+00:00",
        "etl_stage_id": "7d5f8b05-b8ef-421a-9fd9-9bb03de8dd8a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1731",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "87f70582-d67c-45cf-b648-9d033b3f1704",
        "created_date": "2020-05-12T17:31:00.804524+00:00",
        "modified_date": "2020-05-12T17:31:00.804524+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.123214+00:00",
        "etl_stage_id": "87f70582-d67c-45cf-b648-9d033b3f1704",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a2be1217-1acb-41bf-b6aa-bf1ac2c6feda",
        "created_date": "2020-05-12T17:31:00.655357+00:00",
        "modified_date": "2020-05-12T17:31:00.655357+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.101701+00:00",
        "etl_stage_id": "a2be1217-1acb-41bf-b6aa-bf1ac2c6feda",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300-214-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "45c21174-3107-419d-bed3-a2a4f20bec49",
        "created_date": "2020-05-12T17:30:59.819237+00:00",
        "modified_date": "2020-05-12T17:30:59.819237+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.098311+00:00",
        "etl_stage_id": "45c21174-3107-419d-bed3-a2a4f20bec49",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "718c25b7-50b2-4f5b-9e3c-1a0a30521f4f",
        "created_date": "2020-05-12T17:30:59.754228+00:00",
        "modified_date": "2020-05-12T17:30:59.754228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.082368+00:00",
        "etl_stage_id": "718c25b7-50b2-4f5b-9e3c-1a0a30521f4f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9b8618d9-94be-49bf-ac40-5107973fb488",
        "created_date": "2020-05-12T17:30:59.682226+00:00",
        "modified_date": "2020-05-12T17:30:59.682226+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.062082+00:00",
        "etl_stage_id": "9b8618d9-94be-49bf-ac40-5107973fb488",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1730",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9d34e17f-c18f-457e-ad4a-91071fac3a27",
        "created_date": "2020-05-12T17:30:59.642373+00:00",
        "modified_date": "2020-05-12T17:30:59.642373+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.039459+00:00",
        "etl_stage_id": "9d34e17f-c18f-457e-ad4a-91071fac3a27",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "74d64251-b547-42ed-9993-8e0319fa7638",
        "created_date": "2020-05-12T17:30:59.218258+00:00",
        "modified_date": "2020-05-12T17:30:59.218258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.014280+00:00",
        "etl_stage_id": "74d64251-b547-42ed-9993-8e0319fa7638",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "47134789-5cdd-45c7-860d-f22a684a614a",
        "created_date": "2020-05-12T17:30:59.111144+00:00",
        "modified_date": "2020-05-12T17:30:59.111144+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.002884+00:00",
        "etl_stage_id": "47134789-5cdd-45c7-860d-f22a684a614a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1729",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bd7f4fcb-f5e2-4291-bb33-442983cc515f",
        "created_date": "2020-05-12T17:30:59.106361+00:00",
        "modified_date": "2020-05-12T17:30:59.106361+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.991099+00:00",
        "etl_stage_id": "bd7f4fcb-f5e2-4291-bb33-442983cc515f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753-167-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "393aabcf-81d0-4558-9730-9223dc34efe4",
        "created_date": "2020-05-12T17:30:59.077129+00:00",
        "modified_date": "2020-05-12T17:30:59.077129+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.978739+00:00",
        "etl_stage_id": "393aabcf-81d0-4558-9730-9223dc34efe4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299-212-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0f96e7d0-5290-41cc-b32d-cb06f94dfae0",
        "created_date": "2020-05-12T17:30:58.711402+00:00",
        "modified_date": "2020-05-12T17:30:58.711402+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.966743+00:00",
        "etl_stage_id": "0f96e7d0-5290-41cc-b32d-cb06f94dfae0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cd51127b-087b-4fe4-b327-5c7665872af7",
        "created_date": "2020-05-12T17:30:58.568611+00:00",
        "modified_date": "2020-05-12T17:30:58.568611+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.953772+00:00",
        "etl_stage_id": "cd51127b-087b-4fe4-b327-5c7665872af7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1728",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cc979629-ed1e-4b0d-9f11-b1a3207ebd06",
        "created_date": "2020-05-12T17:30:58.211995+00:00",
        "modified_date": "2020-05-12T17:30:58.211995+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.941374+00:00",
        "etl_stage_id": "cc979629-ed1e-4b0d-9f11-b1a3207ebd06",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "93b9d983-5382-4d9a-830a-9c34b6fbf467",
        "created_date": "2020-05-12T17:30:58.155118+00:00",
        "modified_date": "2020-05-12T17:30:58.155118+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.932633+00:00",
        "etl_stage_id": "93b9d983-5382-4d9a-830a-9c34b6fbf467",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-260-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f8815848-f84f-4363-b922-475ab4a88a93",
        "created_date": "2020-05-12T17:30:57.771165+00:00",
        "modified_date": "2020-05-12T17:30:57.771165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.917839+00:00",
        "etl_stage_id": "f8815848-f84f-4363-b922-475ab4a88a93",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8efb69a9-5a4a-4796-b8cf-f5eba6fcf495",
        "created_date": "2020-05-12T17:30:57.690058+00:00",
        "modified_date": "2020-05-12T17:30:57.690058+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.900620+00:00",
        "etl_stage_id": "8efb69a9-5a4a-4796-b8cf-f5eba6fcf495",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297-213-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5ac428a6-e43d-4aa0-9d8e-b85d11e763e6",
        "created_date": "2020-05-12T17:30:57.650228+00:00",
        "modified_date": "2020-05-12T17:30:57.650228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.876868+00:00",
        "etl_stage_id": "5ac428a6-e43d-4aa0-9d8e-b85d11e763e6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2294",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5b6e0287-2821-4bbf-a860-aa1281fe0246",
        "created_date": "2020-05-12T17:30:57.621698+00:00",
        "modified_date": "2020-05-12T17:30:57.621698+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.864771+00:00",
        "etl_stage_id": "5b6e0287-2821-4bbf-a860-aa1281fe0246",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1060a04c-d765-4d02-9c24-d308ec10a9db",
        "created_date": "2020-05-12T17:30:57.031984+00:00",
        "modified_date": "2020-05-12T17:30:57.031984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.852553+00:00",
        "etl_stage_id": "1060a04c-d765-4d02-9c24-d308ec10a9db",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2291",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "31814bc8-e890-43db-9414-7ea4de5638cf",
        "created_date": "2020-05-12T17:30:57.024515+00:00",
        "modified_date": "2020-05-12T17:30:57.024515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.840422+00:00",
        "etl_stage_id": "31814bc8-e890-43db-9414-7ea4de5638cf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1e99037e-df7e-449d-9f52-68beeddff513",
        "created_date": "2020-05-12T17:30:56.887752+00:00",
        "modified_date": "2020-05-12T17:30:56.887752+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.828900+00:00",
        "etl_stage_id": "1e99037e-df7e-449d-9f52-68beeddff513",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751-165-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c1de1168-22f6-411b-b8e9-8b4811e71eb1",
        "created_date": "2020-05-12T17:30:56.329083+00:00",
        "modified_date": "2020-05-12T17:30:56.329083+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.814835+00:00",
        "etl_stage_id": "c1de1168-22f6-411b-b8e9-8b4811e71eb1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296-211-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6654d315-fe64-44e6-bb85-830e844d2b07",
        "created_date": "2020-05-12T17:30:56.294400+00:00",
        "modified_date": "2020-05-12T17:30:56.294400+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.787350+00:00",
        "etl_stage_id": "6654d315-fe64-44e6-bb85-830e844d2b07",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "474aadd5-569f-4119-9b14-df484fbd3f55",
        "created_date": "2020-05-12T17:30:56.293841+00:00",
        "modified_date": "2020-05-12T17:30:56.293841+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.780667+00:00",
        "etl_stage_id": "474aadd5-569f-4119-9b14-df484fbd3f55",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2268",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ea4c6e19-3198-4a88-987d-1b78946a985f",
        "created_date": "2020-05-12T17:30:55.829709+00:00",
        "modified_date": "2020-05-12T17:30:55.829709+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.769260+00:00",
        "etl_stage_id": "ea4c6e19-3198-4a88-987d-1b78946a985f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a2a1bdc9-9418-4a30-a0b5-e4216468c3aa",
        "created_date": "2020-05-12T17:30:55.667592+00:00",
        "modified_date": "2020-05-12T17:30:55.667592+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.753638+00:00",
        "etl_stage_id": "a2a1bdc9-9418-4a30-a0b5-e4216468c3aa",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c433874b-4165-49e7-b403-59a325c1bf05",
        "created_date": "2020-05-12T17:30:55.632116+00:00",
        "modified_date": "2020-05-12T17:30:55.632116+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.741531+00:00",
        "etl_stage_id": "c433874b-4165-49e7-b403-59a325c1bf05",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970-206-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f3604352-174c-4f1d-bcc7-d5ee8b23ccc2",
        "created_date": "2020-05-12T17:30:54.922090+00:00",
        "modified_date": "2020-05-12T17:30:54.922090+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.729392+00:00",
        "etl_stage_id": "f3604352-174c-4f1d-bcc7-d5ee8b23ccc2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4c6c2abd-794d-429d-a4bf-bca16f73ee69",
        "created_date": "2020-05-12T17:30:54.821579+00:00",
        "modified_date": "2020-05-12T17:30:54.821579+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.713240+00:00",
        "etl_stage_id": "4c6c2abd-794d-429d-a4bf-bca16f73ee69",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6df46ae3-4b49-4a81-a484-eff501bf8820",
        "created_date": "2020-05-12T17:30:54.800103+00:00",
        "modified_date": "2020-05-12T17:30:54.800103+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.702436+00:00",
        "etl_stage_id": "6df46ae3-4b49-4a81-a484-eff501bf8820",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1870",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cf4f8fee-54ed-4d92-91bd-cbe79ac8192b",
        "created_date": "2020-05-12T17:30:54.345139+00:00",
        "modified_date": "2020-05-12T17:30:54.345139+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.682238+00:00",
        "etl_stage_id": "cf4f8fee-54ed-4d92-91bd-cbe79ac8192b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f385309b-1239-4d38-ae96-d760336ce2a6",
        "created_date": "2020-05-12T17:30:54.067689+00:00",
        "modified_date": "2020-05-12T17:30:54.067689+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.659512+00:00",
        "etl_stage_id": "f385309b-1239-4d38-ae96-d760336ce2a6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8374fc55-7a04-47f9-b34c-492c0f6e46b1",
        "created_date": "2020-05-12T17:30:53.962570+00:00",
        "modified_date": "2020-05-12T17:30:53.962570+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.647416+00:00",
        "etl_stage_id": "8374fc55-7a04-47f9-b34c-492c0f6e46b1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2e4ab64b-cb54-423c-8027-6f2769a639d0",
        "created_date": "2020-05-12T17:30:53.655455+00:00",
        "modified_date": "2020-05-12T17:30:53.655455+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.635328+00:00",
        "etl_stage_id": "2e4ab64b-cb54-423c-8027-6f2769a639d0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1869",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2e10d872-9339-4a9e-89e8-8d46688ffe80",
        "created_date": "2020-05-12T17:30:53.612958+00:00",
        "modified_date": "2020-05-12T17:30:53.612958+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.614498+00:00",
        "etl_stage_id": "2e10d872-9339-4a9e-89e8-8d46688ffe80",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9e668a92-b365-42b0-ae6f-0d673d820ebb",
        "created_date": "2020-05-12T17:30:53.272614+00:00",
        "modified_date": "2020-05-12T17:30:53.272614+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.593643+00:00",
        "etl_stage_id": "9e668a92-b365-42b0-ae6f-0d673d820ebb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "53eb533a-6b1d-4453-84e9-e162d2af717a",
        "created_date": "2020-05-12T17:30:53.093504+00:00",
        "modified_date": "2020-05-12T17:30:53.093504+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.588934+00:00",
        "etl_stage_id": "53eb533a-6b1d-4453-84e9-e162d2af717a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1868",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a1cca9ab-9c57-432a-aa7f-9866c2e82bd3",
        "created_date": "2020-05-12T17:30:52.677108+00:00",
        "modified_date": "2020-05-12T17:30:52.677108+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.561507+00:00",
        "etl_stage_id": "a1cca9ab-9c57-432a-aa7f-9866c2e82bd3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bf025a26-7bc7-4217-83df-166f67f83c0b",
        "created_date": "2020-05-12T17:30:52.425948+00:00",
        "modified_date": "2020-05-12T17:30:52.425948+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.559494+00:00",
        "etl_stage_id": "bf025a26-7bc7-4217-83df-166f67f83c0b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6efece68-27c4-4666-aa2f-3ca2b2cc5d7e",
        "created_date": "2020-05-12T17:30:52.408145+00:00",
        "modified_date": "2020-05-12T17:30:52.408145+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.521164+00:00",
        "etl_stage_id": "6efece68-27c4-4666-aa2f-3ca2b2cc5d7e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969-205-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a6f65450-dee2-4436-951a-b137ca18d0a3",
        "created_date": "2020-05-12T17:30:52.408731+00:00",
        "modified_date": "2020-05-12T17:30:52.408731+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.542597+00:00",
        "etl_stage_id": "a6f65450-dee2-4436-951a-b137ca18d0a3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645-243-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "00ed834f-d40e-49e2-9718-db5891f73683",
        "created_date": "2020-05-12T17:30:51.562011+00:00",
        "modified_date": "2020-05-12T17:30:51.562011+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.511528+00:00",
        "etl_stage_id": "00ed834f-d40e-49e2-9718-db5891f73683",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f237b768-9231-4170-aa31-ee529f803bdc",
        "created_date": "2020-05-12T17:30:51.551393+00:00",
        "modified_date": "2020-05-12T17:30:51.551393+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.496755+00:00",
        "etl_stage_id": "f237b768-9231-4170-aa31-ee529f803bdc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bb2ba994-060f-48cc-ae6b-47dcb3fcee8e",
        "created_date": "2020-05-12T17:30:51.389808+00:00",
        "modified_date": "2020-05-12T17:30:51.389808+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.483744+00:00",
        "etl_stage_id": "bb2ba994-060f-48cc-ae6b-47dcb3fcee8e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1867",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cafb4ab8-211d-41f5-b118-ef1459d686bf",
        "created_date": "2020-05-12T17:30:51.281796+00:00",
        "modified_date": "2020-05-12T17:30:51.281796+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.470691+00:00",
        "etl_stage_id": "cafb4ab8-211d-41f5-b118-ef1459d686bf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9256a818-1586-4ceb-a16f-346f9e96a934",
        "created_date": "2020-05-12T17:30:50.768727+00:00",
        "modified_date": "2020-05-12T17:30:50.768727+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.447507+00:00",
        "etl_stage_id": "9256a818-1586-4ceb-a16f-346f9e96a934",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968-204-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d3b8e4f4-6dba-4800-a8b0-e4df896b59d9",
        "created_date": "2020-05-12T17:30:50.677272+00:00",
        "modified_date": "2020-05-12T17:30:50.677272+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.434400+00:00",
        "etl_stage_id": "d3b8e4f4-6dba-4800-a8b0-e4df896b59d9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1866",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "aaf8711a-67c9-4a90-81e6-142fd721ec9e",
        "created_date": "2020-05-12T17:30:49.598777+00:00",
        "modified_date": "2020-05-12T17:30:49.598777+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.422436+00:00",
        "etl_stage_id": "aaf8711a-67c9-4a90-81e6-142fd721ec9e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1911",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "65f990c1-dbb7-4922-b4a0-09bb5656e637",
        "created_date": "2020-05-12T17:30:49.597764+00:00",
        "modified_date": "2020-05-12T17:30:49.597764+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.383528+00:00",
        "etl_stage_id": "65f990c1-dbb7-4922-b4a0-09bb5656e637",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7b35a820-1103-4657-b280-9feb67df7ba5",
        "created_date": "2020-05-12T17:30:49.202943+00:00",
        "modified_date": "2020-05-12T17:30:49.202943+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.372004+00:00",
        "etl_stage_id": "7b35a820-1103-4657-b280-9feb67df7ba5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4559b489-51ce-41c8-ac85-2d37467a199a",
        "created_date": "2020-05-12T17:30:48.902846+00:00",
        "modified_date": "2020-05-12T17:30:48.902846+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.358979+00:00",
        "etl_stage_id": "4559b489-51ce-41c8-ac85-2d37467a199a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907-244-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d8a6d027-8dfa-4e0f-9814-adb17d865a3a",
        "created_date": "2020-05-12T17:30:48.648950+00:00",
        "modified_date": "2020-05-12T17:30:48.648950+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.335995+00:00",
        "etl_stage_id": "d8a6d027-8dfa-4e0f-9814-adb17d865a3a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1883",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c8a95572-babc-46e9-afc9-e556b3f1e15c",
        "created_date": "2020-05-12T17:30:48.267874+00:00",
        "modified_date": "2020-05-12T17:30:48.267874+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.323909+00:00",
        "etl_stage_id": "c8a95572-babc-46e9-afc9-e556b3f1e15c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "16f28cf2-f614-4c84-b1f0-8ad7a50b3ee2",
        "created_date": "2020-05-12T17:30:48.119896+00:00",
        "modified_date": "2020-05-12T17:30:48.119896+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.300865+00:00",
        "etl_stage_id": "16f28cf2-f614-4c84-b1f0-8ad7a50b3ee2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966-202-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "26a2adc5-e8f1-4d6c-b080-b1c4e3812384",
        "created_date": "2020-05-12T17:30:48.030068+00:00",
        "modified_date": "2020-05-12T17:30:48.030068+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.291470+00:00",
        "etl_stage_id": "26a2adc5-e8f1-4d6c-b080-b1c4e3812384",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "acbb5728-4f46-46d9-8698-a2d80a0d34f5",
        "created_date": "2020-05-12T17:30:47.728955+00:00",
        "modified_date": "2020-05-12T17:30:47.728955+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.278460+00:00",
        "etl_stage_id": "acbb5728-4f46-46d9-8698-a2d80a0d34f5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1865",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "426f8db0-0d7a-4ca1-bb9f-503c182e228f",
        "created_date": "2020-05-12T17:30:47.602762+00:00",
        "modified_date": "2020-05-12T17:30:47.602762+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.265259+00:00",
        "etl_stage_id": "426f8db0-0d7a-4ca1-bb9f-503c182e228f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4827dc27-5c1a-47a1-85b4-9e34a176e4df",
        "created_date": "2020-05-12T17:30:47.210656+00:00",
        "modified_date": "2020-05-12T17:30:47.210656+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.242675+00:00",
        "etl_stage_id": "4827dc27-5c1a-47a1-85b4-9e34a176e4df",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "de3eac9e-73b9-4b88-9fb9-4e9d2654f376",
        "created_date": "2020-05-12T17:30:46.979651+00:00",
        "modified_date": "2020-05-12T17:30:46.979651+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.230347+00:00",
        "etl_stage_id": "de3eac9e-73b9-4b88-9fb9-4e9d2654f376",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1903",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dee012fa-10ab-4c64-9ce1-bd50806797bc",
        "created_date": "2020-05-12T17:30:46.917815+00:00",
        "modified_date": "2020-05-12T17:30:46.917815+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.218274+00:00",
        "etl_stage_id": "dee012fa-10ab-4c64-9ce1-bd50806797bc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "33515bb7-89fc-4019-8bb0-6c0baec51bd2",
        "created_date": "2020-05-12T17:30:46.230131+00:00",
        "modified_date": "2020-05-12T17:30:46.230131+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.204742+00:00",
        "etl_stage_id": "33515bb7-89fc-4019-8bb0-6c0baec51bd2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1902",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e195f1d1-e8c4-4c72-abd7-03cc7a410399",
        "created_date": "2020-05-12T17:30:46.169165+00:00",
        "modified_date": "2020-05-12T17:30:46.169165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.188123+00:00",
        "etl_stage_id": "e195f1d1-e8c4-4c72-abd7-03cc7a410399",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1864",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a6468faa-9965-40e9-9ed1-e0aed4dd4d84",
        "created_date": "2020-05-12T17:30:45.431569+00:00",
        "modified_date": "2020-05-12T17:30:45.431569+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.170033+00:00",
        "etl_stage_id": "a6468faa-9965-40e9-9ed1-e0aed4dd4d84",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965-201-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "90cd101b-31cb-4c8d-8b0f-67b7014df8de",
        "created_date": "2020-05-12T17:30:45.386371+00:00",
        "modified_date": "2020-05-12T17:30:45.386371+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.149275+00:00",
        "etl_stage_id": "90cd101b-31cb-4c8d-8b0f-67b7014df8de",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2c502858-f47d-4301-a6a9-e67c723001ae",
        "created_date": "2020-05-12T17:30:45.128872+00:00",
        "modified_date": "2020-05-12T17:30:45.128872+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.127847+00:00",
        "etl_stage_id": "2c502858-f47d-4301-a6a9-e67c723001ae",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a5ff0edf-b489-45c6-b90d-82f048175b19",
        "created_date": "2020-05-12T17:30:45.127952+00:00",
        "modified_date": "2020-05-12T17:30:45.127952+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.103218+00:00",
        "etl_stage_id": "a5ff0edf-b489-45c6-b90d-82f048175b19",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1901",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9b2b5619-6d9b-4bd4-ac7c-1805581c2b82",
        "created_date": "2020-05-12T17:30:44.936515+00:00",
        "modified_date": "2020-05-12T17:30:44.936515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.095986+00:00",
        "etl_stage_id": "9b2b5619-6d9b-4bd4-ac7c-1805581c2b82",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b2999013-2396-40a2-a99d-20efcb44694a",
        "created_date": "2020-05-12T17:30:43.995926+00:00",
        "modified_date": "2020-05-12T17:30:43.995926+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.084393+00:00",
        "etl_stage_id": "b2999013-2396-40a2-a99d-20efcb44694a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "20a53bfa-f4f9-45e5-9074-343d928441af",
        "created_date": "2020-05-12T17:30:43.961258+00:00",
        "modified_date": "2020-05-12T17:30:43.961258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.072756+00:00",
        "etl_stage_id": "20a53bfa-f4f9-45e5-9074-343d928441af",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838-239-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3c28547d-5125-49ce-8ed8-9293c411692f",
        "created_date": "2020-05-12T17:30:43.863444+00:00",
        "modified_date": "2020-05-12T17:30:43.863444+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.057817+00:00",
        "etl_stage_id": "3c28547d-5125-49ce-8ed8-9293c411692f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "674a5432-bf72-4558-899f-9273cd0612d8",
        "created_date": "2020-05-12T17:30:43.434460+00:00",
        "modified_date": "2020-05-12T17:30:43.434460+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.046567+00:00",
        "etl_stage_id": "674a5432-bf72-4558-899f-9273cd0612d8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1863",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8e94b232-2bea-4da2-8a93-881844ca5e9f",
        "created_date": "2020-05-12T17:30:43.388607+00:00",
        "modified_date": "2020-05-12T17:30:43.388607+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.023061+00:00",
        "etl_stage_id": "8e94b232-2bea-4da2-8a93-881844ca5e9f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e53abda9-79ba-4179-91b7-95dadb047b7a",
        "created_date": "2020-05-12T17:30:42.836254+00:00",
        "modified_date": "2020-05-12T17:30:42.836254+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.999126+00:00",
        "etl_stage_id": "e53abda9-79ba-4179-91b7-95dadb047b7a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "658a0d0a-8ffb-41c5-be5d-383689005809",
        "created_date": "2020-05-12T17:30:42.760655+00:00",
        "modified_date": "2020-05-12T17:30:42.760655+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.986125+00:00",
        "etl_stage_id": "658a0d0a-8ffb-41c5-be5d-383689005809",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964-200-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "076c6bb3-373a-45eb-ab23-401904b10d71",
        "created_date": "2020-05-12T17:30:42.583473+00:00",
        "modified_date": "2020-05-12T17:30:42.583473+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.973087+00:00",
        "etl_stage_id": "076c6bb3-373a-45eb-ab23-401904b10d71",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1862",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "801bb3cf-6ee0-4a43-bf3d-ca065fce9438",
        "created_date": "2020-05-12T17:30:42.182364+00:00",
        "modified_date": "2020-05-12T17:30:42.182364+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.963259+00:00",
        "etl_stage_id": "801bb3cf-6ee0-4a43-bf3d-ca065fce9438",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b6d2d461-de6d-4ad3-ad11-7bbc3af39d42",
        "created_date": "2020-05-12T17:30:42.103935+00:00",
        "modified_date": "2020-05-12T17:30:42.103935+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.945229+00:00",
        "etl_stage_id": "b6d2d461-de6d-4ad3-ad11-7bbc3af39d42",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3f37a4ac-dacf-49b9-9de2-3b404e654672",
        "created_date": "2020-05-12T17:30:41.746100+00:00",
        "modified_date": "2020-05-12T17:30:41.746100+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.923148+00:00",
        "etl_stage_id": "3f37a4ac-dacf-49b9-9de2-3b404e654672",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d5468702-d03a-4f69-83a8-5d0921847852",
        "created_date": "2020-05-12T17:30:41.707420+00:00",
        "modified_date": "2020-05-12T17:30:41.707420+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.913107+00:00",
        "etl_stage_id": "d5468702-d03a-4f69-83a8-5d0921847852",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1545",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "03581cf0-0399-4d8e-b176-f014e2d40625",
        "created_date": "2020-05-12T17:30:41.444447+00:00",
        "modified_date": "2020-05-12T17:30:41.444447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.900083+00:00",
        "etl_stage_id": "03581cf0-0399-4d8e-b176-f014e2d40625",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837-238-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d78680f3-fabb-43b1-a5d9-e13cf382f1f8",
        "created_date": "2020-05-12T17:30:41.244891+00:00",
        "modified_date": "2020-05-12T17:30:41.244891+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.882699+00:00",
        "etl_stage_id": "d78680f3-fabb-43b1-a5d9-e13cf382f1f8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1861",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f2178602-c1be-425f-a80f-9197f911a2a0",
        "created_date": "2020-05-12T17:30:41.019712+00:00",
        "modified_date": "2020-05-12T17:30:41.019712+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.869770+00:00",
        "etl_stage_id": "f2178602-c1be-425f-a80f-9197f911a2a0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "eea19604-e14b-46d2-a431-94581c4d4744",
        "created_date": "2020-05-12T17:30:40.574079+00:00",
        "modified_date": "2020-05-12T17:30:40.574079+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.859480+00:00",
        "etl_stage_id": "eea19604-e14b-46d2-a431-94581c4d4744",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963-199-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "84bc7af1-4946-4432-9ccb-50ee74023cda",
        "created_date": "2020-05-12T17:30:40.465666+00:00",
        "modified_date": "2020-05-12T17:30:40.465666+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.843859+00:00",
        "etl_stage_id": "84bc7af1-4946-4432-9ccb-50ee74023cda",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1163",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cc6028eb-1bc5-41b7-aee1-a29e2a2ef6ea",
        "created_date": "2020-05-12T17:30:40.064046+00:00",
        "modified_date": "2020-05-12T17:30:40.064046+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.829668+00:00",
        "etl_stage_id": "cc6028eb-1bc5-41b7-aee1-a29e2a2ef6ea",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6e55a100-5967-49ee-a4d5-193fbd56c0eb",
        "created_date": "2020-05-12T17:30:39.829304+00:00",
        "modified_date": "2020-05-12T17:30:39.829304+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.815970+00:00",
        "etl_stage_id": "6e55a100-5967-49ee-a4d5-193fbd56c0eb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1989",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f6fea3a0-2523-4475-8f0d-a184811b3e99",
        "created_date": "2020-05-12T17:30:39.438690+00:00",
        "modified_date": "2020-05-12T17:30:39.438690+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.794293+00:00",
        "etl_stage_id": "f6fea3a0-2523-4475-8f0d-a184811b3e99",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "19417327-2257-4d6e-97c7-7a8b22fb9e7d",
        "created_date": "2020-05-12T17:30:39.372095+00:00",
        "modified_date": "2020-05-12T17:30:39.372095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.779091+00:00",
        "etl_stage_id": "19417327-2257-4d6e-97c7-7a8b22fb9e7d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2285",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5ce4f86c-6cbb-4a74-9f05-215e28842a09",
        "created_date": "2020-05-12T17:30:38.967856+00:00",
        "modified_date": "2020-05-12T17:30:38.967856+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.760269+00:00",
        "etl_stage_id": "5ce4f86c-6cbb-4a74-9f05-215e28842a09",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312-224-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "88693930-48a6-49de-8461-ba5c73d3b86b",
        "created_date": "2020-05-12T17:30:38.452632+00:00",
        "modified_date": "2020-05-12T17:30:38.452632+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.749419+00:00",
        "etl_stage_id": "88693930-48a6-49de-8461-ba5c73d3b86b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962-198-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ed4f7aaf-a905-4d0a-8b47-9aaffed786b3",
        "created_date": "2020-05-12T17:30:38.251788+00:00",
        "modified_date": "2020-05-12T17:30:38.251788+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.734875+00:00",
        "etl_stage_id": "ed4f7aaf-a905-4d0a-8b47-9aaffed786b3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831-172-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8e919e2d-1d15-475a-a6a7-8bd4b6dcdb71",
        "created_date": "2020-05-12T17:30:37.637595+00:00",
        "modified_date": "2020-05-12T17:30:37.637595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.721822+00:00",
        "etl_stage_id": "8e919e2d-1d15-475a-a6a7-8bd4b6dcdb71",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cff5ed05-ba38-45c8-a1ed-e541dd00e174",
        "created_date": "2020-05-12T17:30:37.023513+00:00",
        "modified_date": "2020-05-12T17:30:37.023513+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.700292+00:00",
        "etl_stage_id": "cff5ed05-ba38-45c8-a1ed-e541dd00e174",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1988",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ffacf28c-e035-4c0a-83b9-4008e7d7cb08",
        "created_date": "2020-05-12T17:30:36.934389+00:00",
        "modified_date": "2020-05-12T17:30:36.934389+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.692254+00:00",
        "etl_stage_id": "ffacf28c-e035-4c0a-83b9-4008e7d7cb08",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284-245-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0c4680cc-2a30-4596-8e8b-01b46f547af0",
        "created_date": "2020-05-12T17:30:36.721366+00:00",
        "modified_date": "2020-05-12T17:30:36.721366+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.660628+00:00",
        "etl_stage_id": "0c4680cc-2a30-4596-8e8b-01b46f547af0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "06ed62ff-59c6-4c24-8d35-05b15493c171",
        "created_date": "2020-05-12T17:30:36.191727+00:00",
        "modified_date": "2020-05-12T17:30:36.191727+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.625965+00:00",
        "etl_stage_id": "06ed62ff-59c6-4c24-8d35-05b15493c171",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1590051f-c180-4c45-98d5-3182df4b95e2",
        "created_date": "2020-05-12T17:30:35.713251+00:00",
        "modified_date": "2020-05-12T17:30:35.713251+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.609849+00:00",
        "etl_stage_id": "1590051f-c180-4c45-98d5-3182df4b95e2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1987",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6470eae5-495f-4601-a095-b7e0f5c01444",
        "created_date": "2020-05-12T17:30:35.651709+00:00",
        "modified_date": "2020-05-12T17:30:35.651709+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.601795+00:00",
        "etl_stage_id": "6470eae5-495f-4601-a095-b7e0f5c01444",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fda07780-363a-4db1-b5c9-09fe16993661",
        "created_date": "2020-05-12T17:30:35.491527+00:00",
        "modified_date": "2020-05-12T17:30:35.491527+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.584675+00:00",
        "etl_stage_id": "fda07780-363a-4db1-b5c9-09fe16993661",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961-197-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6c561c6f-5c8c-4bd1-83e2-2b89193a6ebb",
        "created_date": "2020-05-12T17:30:35.175545+00:00",
        "modified_date": "2020-05-12T17:30:35.175545+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.561796+00:00",
        "etl_stage_id": "6c561c6f-5c8c-4bd1-83e2-2b89193a6ebb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2311",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5831047a-18d7-47ac-bd1e-176fe60cfd25",
        "created_date": "2020-05-12T17:30:34.874291+00:00",
        "modified_date": "2020-05-12T17:30:34.874291+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.553016+00:00",
        "etl_stage_id": "5831047a-18d7-47ac-bd1e-176fe60cfd25",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829-171-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6b062ae6-43aa-41d1-aba4-3b8d5e39df48",
        "created_date": "2020-05-12T17:30:34.810977+00:00",
        "modified_date": "2020-05-12T17:30:34.810977+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.538101+00:00",
        "etl_stage_id": "6b062ae6-43aa-41d1-aba4-3b8d5e39df48",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "228a1a7c-adcd-4e6c-b843-5016a0f4d042",
        "created_date": "2020-05-12T17:30:34.371857+00:00",
        "modified_date": "2020-05-12T17:30:34.371857+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.528001+00:00",
        "etl_stage_id": "228a1a7c-adcd-4e6c-b843-5016a0f4d042",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c728fadd-f6f2-4d6a-ae43-e4c9055acefb",
        "created_date": "2020-05-12T17:30:33.675739+00:00",
        "modified_date": "2020-05-12T17:30:33.675739+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.515208+00:00",
        "etl_stage_id": "c728fadd-f6f2-4d6a-ae43-e4c9055acefb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954-190-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6160a92b-5d9d-480b-bba0-8f0c0c151442",
        "created_date": "2020-05-12T17:30:33.057052+00:00",
        "modified_date": "2020-05-12T17:30:33.057052+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.500177+00:00",
        "etl_stage_id": "6160a92b-5d9d-480b-bba0-8f0c0c151442",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1986",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2488b9f5-1d87-42e3-b3f8-ee97c3680063",
        "created_date": "2020-05-12T17:30:32.896103+00:00",
        "modified_date": "2020-05-12T17:30:32.896103+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.486780+00:00",
        "etl_stage_id": "2488b9f5-1d87-42e3-b3f8-ee97c3680063",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "58ba420b-a6a2-4d4e-9902-b734c8cc484a",
        "created_date": "2020-05-12T17:30:32.795561+00:00",
        "modified_date": "2020-05-12T17:30:32.795561+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.452502+00:00",
        "etl_stage_id": "58ba420b-a6a2-4d4e-9902-b734c8cc484a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bc77738a-e01e-4a6f-ac79-a79a70cb5783",
        "created_date": "2020-05-12T17:30:32.168009+00:00",
        "modified_date": "2020-05-12T17:30:32.168009+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.442643+00:00",
        "etl_stage_id": "bc77738a-e01e-4a6f-ac79-a79a70cb5783",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310-223-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d6a45a18-fa74-47c4-a2ea-a75f523e3350",
        "created_date": "2020-05-12T17:30:31.987648+00:00",
        "modified_date": "2020-05-12T17:30:31.987648+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.428304+00:00",
        "etl_stage_id": "d6a45a18-fa74-47c4-a2ea-a75f523e3350",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c6c0878a-025f-4c55-8b1b-2e7a5701dc8e",
        "created_date": "2020-05-12T17:30:31.949741+00:00",
        "modified_date": "2020-05-12T17:30:31.949741+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.399537+00:00",
        "etl_stage_id": "c6c0878a-025f-4c55-8b1b-2e7a5701dc8e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2927d94b-86b0-4875-89ee-30cb05cbff9d",
        "created_date": "2020-05-12T17:30:31.505289+00:00",
        "modified_date": "2020-05-12T17:30:31.505289+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.379846+00:00",
        "etl_stage_id": "2927d94b-86b0-4875-89ee-30cb05cbff9d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1985",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "37c3e4af-6592-474d-8293-f67139f1d49d",
        "created_date": "2020-05-12T17:30:31.369923+00:00",
        "modified_date": "2020-05-12T17:30:31.369923+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.368376+00:00",
        "etl_stage_id": "37c3e4af-6592-474d-8293-f67139f1d49d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d8b84e0b-9af4-4738-bcd6-a707e756f8ae",
        "created_date": "2020-05-12T17:30:30.501010+00:00",
        "modified_date": "2020-05-12T17:30:30.501010+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.355546+00:00",
        "etl_stage_id": "d8b84e0b-9af4-4738-bcd6-a707e756f8ae",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2d56e1d0-b781-40a5-bb54-3db6b931d8e3",
        "created_date": "2020-05-12T17:30:30.424808+00:00",
        "modified_date": "2020-05-12T17:30:30.424808+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.316548+00:00",
        "etl_stage_id": "2d56e1d0-b781-40a5-bb54-3db6b931d8e3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-246-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5e8b5b86-41f3-4ae7-9cdd-df3cb60239d5",
        "created_date": "2020-05-12T17:30:30.210512+00:00",
        "modified_date": "2020-05-12T17:30:30.210512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.302765+00:00",
        "etl_stage_id": "5e8b5b86-41f3-4ae7-9cdd-df3cb60239d5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801-187-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2feebc6e-96da-42ca-8f35-b6ae3816cb45",
        "created_date": "2020-05-12T17:30:29.419687+00:00",
        "modified_date": "2020-05-12T17:30:29.419687+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.291319+00:00",
        "etl_stage_id": "2feebc6e-96da-42ca-8f35-b6ae3816cb45",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1984",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "777cf4dd-f4b6-4837-8e1a-709ea8c1c486",
        "created_date": "2020-05-12T17:30:28.895891+00:00",
        "modified_date": "2020-05-12T17:30:28.895891+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.269602+00:00",
        "etl_stage_id": "777cf4dd-f4b6-4837-8e1a-709ea8c1c486",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0aca844c-15fc-4f2f-bd5e-fa4951fc05b0",
        "created_date": "2020-05-12T17:30:28.479261+00:00",
        "modified_date": "2020-05-12T17:30:28.479261+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.234551+00:00",
        "etl_stage_id": "0aca844c-15fc-4f2f-bd5e-fa4951fc05b0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2f06ab3a-bf6d-4800-9f76-51a0f2586da8",
        "created_date": "2020-05-12T17:30:28.346044+00:00",
        "modified_date": "2020-05-12T17:30:28.346044+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.218964+00:00",
        "etl_stage_id": "2f06ab3a-bf6d-4800-9f76-51a0f2586da8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309-222-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "76ef6c8c-f5f8-4d90-a406-4fb588931c4e",
        "created_date": "2020-05-12T17:30:28.132738+00:00",
        "modified_date": "2020-05-12T17:30:28.132738+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.213501+00:00",
        "etl_stage_id": "76ef6c8c-f5f8-4d90-a406-4fb588931c4e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c70741c7-4f10-4965-bbb4-6ad716ad9e3b",
        "created_date": "2020-05-12T17:30:28.103722+00:00",
        "modified_date": "2020-05-12T17:30:28.103722+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.190774+00:00",
        "etl_stage_id": "c70741c7-4f10-4965-bbb4-6ad716ad9e3b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1983",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e5ae3b8e-3131-46df-b767-28415463ae93",
        "created_date": "2020-05-12T17:30:27.803171+00:00",
        "modified_date": "2020-05-12T17:30:27.803171+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.167868+00:00",
        "etl_stage_id": "e5ae3b8e-3131-46df-b767-28415463ae93",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1750",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "166d5a00-12d8-4b38-9929-52147a195d53",
        "created_date": "2020-05-12T17:30:27.483116+00:00",
        "modified_date": "2020-05-12T17:30:27.483116+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.156318+00:00",
        "etl_stage_id": "166d5a00-12d8-4b38-9929-52147a195d53",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783-146-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "17cb86a2-da7a-45c8-93ab-d9bfdb3165cd",
        "created_date": "2020-05-12T17:30:27.150550+00:00",
        "modified_date": "2020-05-12T17:30:27.150550+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.143468+00:00",
        "etl_stage_id": "17cb86a2-da7a-45c8-93ab-d9bfdb3165cd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c6182070-192a-43db-9d23-058209fe308b",
        "created_date": "2020-05-12T17:30:27.116637+00:00",
        "modified_date": "2020-05-12T17:30:27.116637+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.130674+00:00",
        "etl_stage_id": "c6182070-192a-43db-9d23-058209fe308b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "69c689bb-5ca6-4950-b1c4-3bb7f07c0af6",
        "created_date": "2020-05-12T17:30:26.483977+00:00",
        "modified_date": "2020-05-12T17:30:26.483977+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.119186+00:00",
        "etl_stage_id": "69c689bb-5ca6-4950-b1c4-3bb7f07c0af6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1749",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bafb5c6f-9abf-443f-865a-056b0369fb0d",
        "created_date": "2020-05-12T17:30:26.303892+00:00",
        "modified_date": "2020-05-12T17:30:26.303892+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.107647+00:00",
        "etl_stage_id": "bafb5c6f-9abf-443f-865a-056b0369fb0d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "06d162ec-8dd1-4d68-8948-7e0336b4efb9",
        "created_date": "2020-05-12T17:30:25.988377+00:00",
        "modified_date": "2020-05-12T17:30:25.988377+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.094602+00:00",
        "etl_stage_id": "06d162ec-8dd1-4d68-8948-7e0336b4efb9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578-61-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "618ee029-4ea8-40ee-b5d9-be060ae888f5",
        "created_date": "2020-05-12T17:30:25.387194+00:00",
        "modified_date": "2020-05-12T17:30:25.387194+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.082368+00:00",
        "etl_stage_id": "618ee029-4ea8-40ee-b5d9-be060ae888f5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4a37fd52-a408-4694-980f-88ca4b6691f2",
        "created_date": "2020-05-12T17:30:25.354957+00:00",
        "modified_date": "2020-05-12T17:30:25.354957+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.060631+00:00",
        "etl_stage_id": "4a37fd52-a408-4694-980f-88ca4b6691f2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781-144-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f72cfd3b-64ea-4a0c-8580-1a8a2ad8ed5a",
        "created_date": "2020-05-12T17:30:25.110099+00:00",
        "modified_date": "2020-05-12T17:30:25.110099+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.038772+00:00",
        "etl_stage_id": "f72cfd3b-64ea-4a0c-8580-1a8a2ad8ed5a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1982",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "86842939-08c0-4f2a-9247-a8b3ad7e0a1c",
        "created_date": "2020-05-12T17:30:24.609641+00:00",
        "modified_date": "2020-05-12T17:30:24.609641+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.015183+00:00",
        "etl_stage_id": "86842939-08c0-4f2a-9247-a8b3ad7e0a1c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308-221-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "40baa2aa-5f96-47e7-bc1b-07a8f86127b7",
        "created_date": "2020-05-12T17:30:24.330609+00:00",
        "modified_date": "2020-05-12T17:30:24.330609+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.005765+00:00",
        "etl_stage_id": "40baa2aa-5f96-47e7-bc1b-07a8f86127b7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f37bb022-1479-418a-b1f4-0084de258869",
        "created_date": "2020-05-12T17:30:24.095893+00:00",
        "modified_date": "2020-05-12T17:30:24.095893+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.991618+00:00",
        "etl_stage_id": "f37bb022-1479-418a-b1f4-0084de258869",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c2708a5d-1436-466f-a9b5-50dbebf6ae0b",
        "created_date": "2020-05-12T17:30:23.869815+00:00",
        "modified_date": "2020-05-12T17:30:23.869815+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.977273+00:00",
        "etl_stage_id": "c2708a5d-1436-466f-a9b5-50dbebf6ae0b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024-241-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7dc6eb01-a7ef-4b72-b35a-81f9e876c9cb",
        "created_date": "2020-05-12T17:30:23.293708+00:00",
        "modified_date": "2020-05-12T17:30:23.293708+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.964711+00:00",
        "etl_stage_id": "7dc6eb01-a7ef-4b72-b35a-81f9e876c9cb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c2fc339b-c3db-4fc8-8df1-430501eb281f",
        "created_date": "2020-05-12T17:30:22.760201+00:00",
        "modified_date": "2020-05-12T17:30:22.760201+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.952335+00:00",
        "etl_stage_id": "c2fc339b-c3db-4fc8-8df1-430501eb281f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1981",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "72be0b23-900d-4aff-80f8-27882d4f2931",
        "created_date": "2020-05-12T17:30:22.744991+00:00",
        "modified_date": "2020-05-12T17:30:22.744991+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.939740+00:00",
        "etl_stage_id": "72be0b23-900d-4aff-80f8-27882d4f2931",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478-43-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "28a7cbec-97d6-48a8-a80e-8d060547e396",
        "created_date": "2020-05-12T17:30:22.098194+00:00",
        "modified_date": "2020-05-12T17:30:22.098194+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.927307+00:00",
        "etl_stage_id": "28a7cbec-97d6-48a8-a80e-8d060547e396",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779-142-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f6c6f619-9f0d-43d6-8c61-470ed5647740",
        "created_date": "2020-05-12T17:30:21.831924+00:00",
        "modified_date": "2020-05-12T17:30:21.831924+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.899477+00:00",
        "etl_stage_id": "f6c6f619-9f0d-43d6-8c61-470ed5647740",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1980",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "59bad7d6-672a-4354-8765-13564acb21ad",
        "created_date": "2020-05-12T17:30:21.648447+00:00",
        "modified_date": "2020-05-12T17:30:21.648447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.875332+00:00",
        "etl_stage_id": "59bad7d6-672a-4354-8765-13564acb21ad",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "27fe2e53-c094-4a33-a3ec-278d3c6a7baf",
        "created_date": "2020-05-12T17:30:21.356339+00:00",
        "modified_date": "2020-05-12T17:30:21.356339+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.849614+00:00",
        "etl_stage_id": "27fe2e53-c094-4a33-a3ec-278d3c6a7baf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6e83e84c-12eb-4557-b947-fe8c91857cb5",
        "created_date": "2020-05-12T17:30:21.295062+00:00",
        "modified_date": "2020-05-12T17:30:21.295062+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.828410+00:00",
        "etl_stage_id": "6e83e84c-12eb-4557-b947-fe8c91857cb5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307-220-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ad091889-75a5-4286-8f80-26d2ed60f266",
        "created_date": "2020-05-12T17:30:21.117003+00:00",
        "modified_date": "2020-05-12T17:30:21.117003+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.805059+00:00",
        "etl_stage_id": "ad091889-75a5-4286-8f80-26d2ed60f266",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1979",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3689cdad-17dd-4c4d-8a8d-b49f3d54fd26",
        "created_date": "2020-05-12T17:30:20.811212+00:00",
        "modified_date": "2020-05-12T17:30:20.811212+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.776026+00:00",
        "etl_stage_id": "3689cdad-17dd-4c4d-8a8d-b49f3d54fd26",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023-240-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "316c0156-140d-4876-89fe-0edae3d4f491",
        "created_date": "2020-05-12T17:30:20.277664+00:00",
        "modified_date": "2020-05-12T17:30:20.277664+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.760676+00:00",
        "etl_stage_id": "316c0156-140d-4876-89fe-0edae3d4f491",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477-42-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3364e7f2-beb6-4dcc-8608-bf1d98de69f3",
        "created_date": "2020-05-12T17:30:20.242518+00:00",
        "modified_date": "2020-05-12T17:30:20.242518+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.749826+00:00",
        "etl_stage_id": "3364e7f2-beb6-4dcc-8608-bf1d98de69f3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fb8452d9-f4d2-4ac5-8b16-565670c0603c",
        "created_date": "2020-05-12T17:30:20.077930+00:00",
        "modified_date": "2020-05-12T17:30:20.077930+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.723518+00:00",
        "etl_stage_id": "fb8452d9-f4d2-4ac5-8b16-565670c0603c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e597f5d6-7016-40fd-a4d1-173d2704c80d",
        "created_date": "2020-05-12T17:30:19.952777+00:00",
        "modified_date": "2020-05-12T17:30:19.952777+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.713453+00:00",
        "etl_stage_id": "e597f5d6-7016-40fd-a4d1-173d2704c80d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1978",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3c3f63d8-6607-4e08-9e02-5d95e5966bf0",
        "created_date": "2020-05-12T17:30:19.547427+00:00",
        "modified_date": "2020-05-12T17:30:19.547427+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.699885+00:00",
        "etl_stage_id": "3c3f63d8-6607-4e08-9e02-5d95e5966bf0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5d01dc72-cc96-431a-833f-f6a79a32ed4c",
        "created_date": "2020-05-12T17:30:19.427762+00:00",
        "modified_date": "2020-05-12T17:30:19.427762+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.689717+00:00",
        "etl_stage_id": "5d01dc72-cc96-431a-833f-f6a79a32ed4c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777-140-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0b6267aa-43ec-4fe6-90e2-4b9952d3ac81",
        "created_date": "2020-05-12T17:30:19.271732+00:00",
        "modified_date": "2020-05-12T17:30:19.271732+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.667800+00:00",
        "etl_stage_id": "0b6267aa-43ec-4fe6-90e2-4b9952d3ac81",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306-219-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ca8b23a2-3c4c-419f-8cbe-58d86cc922b0",
        "created_date": "2020-05-12T17:30:18.953750+00:00",
        "modified_date": "2020-05-12T17:30:18.953750+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.655704+00:00",
        "etl_stage_id": "ca8b23a2-3c4c-419f-8cbe-58d86cc922b0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476-47-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5312e421-c8f8-42ba-8bff-614cdf9530ae",
        "created_date": "2020-05-12T17:30:18.761430+00:00",
        "modified_date": "2020-05-12T17:30:18.761430+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.643604+00:00",
        "etl_stage_id": "5312e421-c8f8-42ba-8bff-614cdf9530ae",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1887",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9af57afa-bad6-4c38-853b-fa3342e28231",
        "created_date": "2020-05-12T17:30:18.030874+00:00",
        "modified_date": "2020-05-12T17:30:18.030874+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.633494+00:00",
        "etl_stage_id": "9af57afa-bad6-4c38-853b-fa3342e28231",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bde8a5b0-db36-4986-8aae-52323ae74c68",
        "created_date": "2020-05-12T17:30:17.929715+00:00",
        "modified_date": "2020-05-12T17:30:17.929715+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.613237+00:00",
        "etl_stage_id": "bde8a5b0-db36-4986-8aae-52323ae74c68",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9672989a-bb7f-4b0a-bc61-0fc55e463b7b",
        "created_date": "2020-05-12T17:30:17.888162+00:00",
        "modified_date": "2020-05-12T17:30:17.888162+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.601694+00:00",
        "etl_stage_id": "9672989a-bb7f-4b0a-bc61-0fc55e463b7b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ba09bf55-e9f8-43b2-ac07-b64b191d5c35",
        "created_date": "2020-05-12T17:30:17.806905+00:00",
        "modified_date": "2020-05-12T17:30:17.806905+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.588842+00:00",
        "etl_stage_id": "ba09bf55-e9f8-43b2-ac07-b64b191d5c35",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1885",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "aeb8357d-0e4e-489d-90e8-69e883b60477",
        "created_date": "2020-05-12T17:30:17.294140+00:00",
        "modified_date": "2020-05-12T17:30:17.294140+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.567346+00:00",
        "etl_stage_id": "aeb8357d-0e4e-489d-90e8-69e883b60477",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305-218-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "23dd5501-0b75-48ea-865c-2ee80d641273",
        "created_date": "2020-05-12T17:30:17.179794+00:00",
        "modified_date": "2020-05-12T17:30:17.179794+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.554554+00:00",
        "etl_stage_id": "23dd5501-0b75-48ea-865c-2ee80d641273",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475-46-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4e0250a5-ae7c-42c0-ad27-588bcdbb76aa",
        "created_date": "2020-05-12T17:30:16.975650+00:00",
        "modified_date": "2020-05-12T17:30:16.975650+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.542288+00:00",
        "etl_stage_id": "4e0250a5-ae7c-42c0-ad27-588bcdbb76aa",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d7213bae-1f8d-498e-a660-8e76554c781b",
        "created_date": "2020-05-12T17:30:16.801156+00:00",
        "modified_date": "2020-05-12T17:30:16.801156+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.517409+00:00",
        "etl_stage_id": "d7213bae-1f8d-498e-a660-8e76554c781b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9fc40f41-c29b-4089-aa77-bef55617514b",
        "created_date": "2020-05-12T17:30:16.774265+00:00",
        "modified_date": "2020-05-12T17:30:16.774265+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.504227+00:00",
        "etl_stage_id": "9fc40f41-c29b-4089-aa77-bef55617514b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FMGDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1b520816-e7ad-4fc0-8558-537c1e9fb16c",
        "created_date": "2020-05-12T17:30:16.771954+00:00",
        "modified_date": "2020-05-12T17:30:16.771954+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.484534+00:00",
        "etl_stage_id": "1b520816-e7ad-4fc0-8558-537c1e9fb16c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474-53-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "788225cf-384b-4e0f-9460-f4e83c86e6c8",
        "created_date": "2020-05-12T17:31:12.018776+00:00",
        "modified_date": "2020-05-12T17:31:12.018776+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.978907+00:00",
        "etl_stage_id": "788225cf-384b-4e0f-9460-f4e83c86e6c8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a4682939-c59e-4449-944a-740d479c5769",
        "created_date": "2020-05-12T17:31:11.523971+00:00",
        "modified_date": "2020-05-12T17:31:11.523971+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.965571+00:00",
        "etl_stage_id": "a4682939-c59e-4449-944a-740d479c5769",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775-138-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fae81871-58b6-41ea-b2fb-e5ac88062032",
        "created_date": "2020-05-12T17:31:11.458096+00:00",
        "modified_date": "2020-05-12T17:31:11.458096+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.962554+00:00",
        "etl_stage_id": "fae81871-58b6-41ea-b2fb-e5ac88062032",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473-51-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a949675b-785e-4ea1-85dc-6de61923d585",
        "created_date": "2020-05-12T17:31:10.848006+00:00",
        "modified_date": "2020-05-12T17:31:10.848006+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.940200+00:00",
        "etl_stage_id": "a949675b-785e-4ea1-85dc-6de61923d585",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dd4112f2-3e0b-42f3-be70-4d52882a89a7",
        "created_date": "2020-05-12T17:31:10.747616+00:00",
        "modified_date": "2020-05-12T17:31:10.747616+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.917843+00:00",
        "etl_stage_id": "dd4112f2-3e0b-42f3-be70-4d52882a89a7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773-136-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "19a9d850-2619-4a0f-9d0e-4bd5d314709f",
        "created_date": "2020-05-12T17:31:10.321394+00:00",
        "modified_date": "2020-05-12T17:31:10.321394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.894963+00:00",
        "etl_stage_id": "19a9d850-2619-4a0f-9d0e-4bd5d314709f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6201ae11-b060-4964-a649-d6795468a5cb",
        "created_date": "2020-05-12T17:31:10.149863+00:00",
        "modified_date": "2020-05-12T17:31:10.149863+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.871854+00:00",
        "etl_stage_id": "6201ae11-b060-4964-a649-d6795468a5cb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472-52-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "45a3fbc1-4633-4b8d-914c-a9ca95084501",
        "created_date": "2020-05-12T17:31:09.779713+00:00",
        "modified_date": "2020-05-12T17:31:09.779713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.860080+00:00",
        "etl_stage_id": "45a3fbc1-4633-4b8d-914c-a9ca95084501",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cd5969b2-db80-46a7-8e68-96c9f46ea48e",
        "created_date": "2020-05-12T17:31:09.649164+00:00",
        "modified_date": "2020-05-12T17:31:09.649164+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.846527+00:00",
        "etl_stage_id": "cd5969b2-db80-46a7-8e68-96c9f46ea48e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "373f329a-20a9-4609-859a-30ad5bed9abb",
        "created_date": "2020-05-12T17:31:09.409653+00:00",
        "modified_date": "2020-05-12T17:31:09.409653+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.824877+00:00",
        "etl_stage_id": "373f329a-20a9-4609-859a-30ad5bed9abb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-237-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "26ea2db1-4285-43e1-9996-b0e4ae2059bd",
        "created_date": "2020-05-12T17:31:09.215713+00:00",
        "modified_date": "2020-05-12T17:31:09.215713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.812497+00:00",
        "etl_stage_id": "26ea2db1-4285-43e1-9996-b0e4ae2059bd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471-58-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "edca2359-5dcd-458f-879b-cee40c7a1f7e",
        "created_date": "2020-05-12T17:31:08.626956+00:00",
        "modified_date": "2020-05-12T17:31:08.626956+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.800180+00:00",
        "etl_stage_id": "edca2359-5dcd-458f-879b-cee40c7a1f7e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-163-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1faf602a-667a-4612-8a09-3d50fbb2f609",
        "created_date": "2020-05-12T17:31:08.322568+00:00",
        "modified_date": "2020-05-12T17:31:08.322568+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.757146+00:00",
        "etl_stage_id": "1faf602a-667a-4612-8a09-3d50fbb2f609",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bff137a4-9707-44f0-882a-5bb1a1114683",
        "created_date": "2020-05-12T17:31:08.140562+00:00",
        "modified_date": "2020-05-12T17:31:08.140562+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.754443+00:00",
        "etl_stage_id": "bff137a4-9707-44f0-882a-5bb1a1114683",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d4f45641-e00b-44a5-996e-3e90ae7d3365",
        "created_date": "2020-05-12T17:31:08.102175+00:00",
        "modified_date": "2020-05-12T17:31:08.102175+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.722672+00:00",
        "etl_stage_id": "d4f45641-e00b-44a5-996e-3e90ae7d3365",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2007",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "81d9a866-1d87-4d08-af60-b69e60f6f95d",
        "created_date": "2020-05-12T17:31:07.894394+00:00",
        "modified_date": "2020-05-12T17:31:07.894394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.721338+00:00",
        "etl_stage_id": "81d9a866-1d87-4d08-af60-b69e60f6f95d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "90154b03-a7d1-4632-a0ac-c2db26f08cb9",
        "created_date": "2020-05-12T17:31:07.784330+00:00",
        "modified_date": "2020-05-12T17:31:07.784330+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.698381+00:00",
        "etl_stage_id": "90154b03-a7d1-4632-a0ac-c2db26f08cb9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470-55-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "29c5df65-9a81-4b19-821e-d51d631ccafe",
        "created_date": "2020-05-12T17:31:07.499125+00:00",
        "modified_date": "2020-05-12T17:31:07.499125+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.697035+00:00",
        "etl_stage_id": "29c5df65-9a81-4b19-821e-d51d631ccafe",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2006",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4e486227-ab06-4872-815e-580cc951eb0a",
        "created_date": "2020-05-12T17:31:07.475809+00:00",
        "modified_date": "2020-05-12T17:31:07.475809+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.683419+00:00",
        "etl_stage_id": "4e486227-ab06-4872-815e-580cc951eb0a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-242-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9e859aac-06ab-4af5-9bee-c4bf16a82afa",
        "created_date": "2020-05-12T17:31:07.202652+00:00",
        "modified_date": "2020-05-12T17:31:07.202652+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.650425+00:00",
        "etl_stage_id": "9e859aac-06ab-4af5-9bee-c4bf16a82afa",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "151e0aa3-6bb6-4b86-a546-77282a044c23",
        "created_date": "2020-05-12T17:31:07.052037+00:00",
        "modified_date": "2020-05-12T17:31:07.052037+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.648359+00:00",
        "etl_stage_id": "151e0aa3-6bb6-4b86-a546-77282a044c23",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-161-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f4bc3259-0697-4617-b05b-664f1bfe2b45",
        "created_date": "2020-05-12T17:31:06.655325+00:00",
        "modified_date": "2020-05-12T17:31:06.655325+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.636847+00:00",
        "etl_stage_id": "f4bc3259-0697-4617-b05b-664f1bfe2b45",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2005",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "619b92d9-5f2d-4177-9c99-07aa6f9210bd",
        "created_date": "2020-05-12T17:31:06.575659+00:00",
        "modified_date": "2020-05-12T17:31:06.575659+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.623385+00:00",
        "etl_stage_id": "619b92d9-5f2d-4177-9c99-07aa6f9210bd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469-57-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0860b19e-e8a6-4372-bfec-f47dc6030d32",
        "created_date": "2020-05-12T17:31:06.486170+00:00",
        "modified_date": "2020-05-12T17:31:06.486170+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.601708+00:00",
        "etl_stage_id": "0860b19e-e8a6-4372-bfec-f47dc6030d32",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fe62f0d5-f4ba-4836-ab9d-9d3c28f9a41b",
        "created_date": "2020-05-12T17:31:06.167498+00:00",
        "modified_date": "2020-05-12T17:31:06.167498+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.588618+00:00",
        "etl_stage_id": "fe62f0d5-f4ba-4836-ab9d-9d3c28f9a41b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e03f07d0-6cb6-4144-9d81-cae413b33220",
        "created_date": "2020-05-12T17:31:05.990122+00:00",
        "modified_date": "2020-05-12T17:31:05.990122+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.576446+00:00",
        "etl_stage_id": "e03f07d0-6cb6-4144-9d81-cae413b33220",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2004",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7ddbc193-4f37-440c-bcb2-31b29f923502",
        "created_date": "2020-05-12T17:31:05.946870+00:00",
        "modified_date": "2020-05-12T17:31:05.946870+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.554738+00:00",
        "etl_stage_id": "7ddbc193-4f37-440c-bcb2-31b29f923502",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304-217-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d03406a4-010d-4090-a189-34430718ea19",
        "created_date": "2020-05-12T17:31:05.856646+00:00",
        "modified_date": "2020-05-12T17:31:05.856646+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.549364+00:00",
        "etl_stage_id": "d03406a4-010d-4090-a189-34430718ea19",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761-153-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cb70ed3a-d05d-4351-a52f-99977457dc74",
        "created_date": "2020-05-12T17:31:05.536677+00:00",
        "modified_date": "2020-05-12T17:31:05.536677+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.529088+00:00",
        "etl_stage_id": "cb70ed3a-d05d-4351-a52f-99977457dc74",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2003",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7f456822-29d6-4213-902c-1b1e896a069c",
        "created_date": "2020-05-12T17:31:05.463603+00:00",
        "modified_date": "2020-05-12T17:31:05.463603+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.518233+00:00",
        "etl_stage_id": "7f456822-29d6-4213-902c-1b1e896a069c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dcee8395-2369-4f41-9b3a-27290bbd5d25",
        "created_date": "2020-05-12T17:31:05.354095+00:00",
        "modified_date": "2020-05-12T17:31:05.354095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.505422+00:00",
        "etl_stage_id": "dcee8395-2369-4f41-9b3a-27290bbd5d25",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2002",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fe802482-d907-44c4-ac22-25ccfd85f704",
        "created_date": "2020-05-12T17:31:04.932282+00:00",
        "modified_date": "2020-05-12T17:31:04.932282+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.494027+00:00",
        "etl_stage_id": "fe802482-d907-44c4-ac22-25ccfd85f704",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1132",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d522b3e6-38dd-4ed0-aacd-de831eb616b7",
        "created_date": "2020-05-12T17:31:04.855004+00:00",
        "modified_date": "2020-05-12T17:31:04.855004+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.481926+00:00",
        "etl_stage_id": "d522b3e6-38dd-4ed0-aacd-de831eb616b7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bcde9722-72dc-4e51-b047-a1dfbd0cd930",
        "created_date": "2020-05-12T17:31:04.461154+00:00",
        "modified_date": "2020-05-12T17:31:04.461154+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.460825+00:00",
        "etl_stage_id": "bcde9722-72dc-4e51-b047-a1dfbd0cd930",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7828302f-116a-452d-b0f4-dcd67d6c94a2",
        "created_date": "2020-05-12T17:31:04.323227+00:00",
        "modified_date": "2020-05-12T17:31:04.323227+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.435829+00:00",
        "etl_stage_id": "7828302f-116a-452d-b0f4-dcd67d6c94a2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-2022",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "12922555-d30e-4634-8b94-aa16b5238b6e",
        "created_date": "2020-05-12T17:31:04.295608+00:00",
        "modified_date": "2020-05-12T17:31:04.295608+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.425059+00:00",
        "etl_stage_id": "12922555-d30e-4634-8b94-aa16b5238b6e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303-216-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c2626c22-bda5-4cfa-bf2f-cb99bc733db9",
        "created_date": "2020-05-12T17:31:04.101588+00:00",
        "modified_date": "2020-05-12T17:31:04.101588+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.412836+00:00",
        "etl_stage_id": "c2626c22-bda5-4cfa-bf2f-cb99bc733db9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5c9c2513-c3f3-40ed-ac64-2223c9051bbd",
        "created_date": "2020-05-12T17:31:03.769403+00:00",
        "modified_date": "2020-05-12T17:31:03.769403+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.391159+00:00",
        "etl_stage_id": "5c9c2513-c3f3-40ed-ac64-2223c9051bbd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1993",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4cb62226-d375-4ef9-84ee-e5e4e4848ddd",
        "created_date": "2020-05-12T17:31:03.690072+00:00",
        "modified_date": "2020-05-12T17:31:03.690072+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.378151+00:00",
        "etl_stage_id": "4cb62226-d375-4ef9-84ee-e5e4e4848ddd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a1175b07-30f8-45b1-b4e6-7604c364d5ab",
        "created_date": "2020-05-12T17:31:03.399880+00:00",
        "modified_date": "2020-05-12T17:31:03.399880+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.366681+00:00",
        "etl_stage_id": "a1175b07-30f8-45b1-b4e6-7604c364d5ab",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "93389021-916e-4bc3-9be5-1b3cb945d84a",
        "created_date": "2020-05-12T17:31:03.227418+00:00",
        "modified_date": "2020-05-12T17:31:03.227418+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.350850+00:00",
        "etl_stage_id": "93389021-916e-4bc3-9be5-1b3cb945d84a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759-151-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "56cd30e4-30dc-425e-aea5-794e41b821bb",
        "created_date": "2020-05-12T17:31:03.219861+00:00",
        "modified_date": "2020-05-12T17:31:03.219861+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.336143+00:00",
        "etl_stage_id": "56cd30e4-30dc-425e-aea5-794e41b821bb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1992",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7b40572d-edb8-47bb-b019-1def8572e039",
        "created_date": "2020-05-12T17:31:02.984007+00:00",
        "modified_date": "2020-05-12T17:31:02.984007+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.309639+00:00",
        "etl_stage_id": "7b40572d-edb8-47bb-b019-1def8572e039",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1aba5b52-eedb-4020-b0a3-1e9f68751ecd",
        "created_date": "2020-05-12T17:31:02.607132+00:00",
        "modified_date": "2020-05-12T17:31:02.607132+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.300786+00:00",
        "etl_stage_id": "1aba5b52-eedb-4020-b0a3-1e9f68751ecd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3c17cbfb-af4c-41d2-a9dd-323d4335a33f",
        "created_date": "2020-05-12T17:31:02.449279+00:00",
        "modified_date": "2020-05-12T17:31:02.449279+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.279755+00:00",
        "etl_stage_id": "3c17cbfb-af4c-41d2-a9dd-323d4335a33f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302-215-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "00707fba-12a0-494e-9abc-d6c7b31fde42",
        "created_date": "2020-05-12T17:31:02.314591+00:00",
        "modified_date": "2020-05-12T17:31:02.314591+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.273912+00:00",
        "etl_stage_id": "00707fba-12a0-494e-9abc-d6c7b31fde42",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757-149-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "570871c4-a945-4295-89d3-576a743eb4d5",
        "created_date": "2020-05-12T17:31:01.943047+00:00",
        "modified_date": "2020-05-12T17:31:01.943047+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.253639+00:00",
        "etl_stage_id": "570871c4-a945-4295-89d3-576a743eb4d5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c3a83f11-d527-4c06-b1b4-47d967f34f9a",
        "created_date": "2020-05-12T17:31:01.895910+00:00",
        "modified_date": "2020-05-12T17:31:01.895910+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.233956+00:00",
        "etl_stage_id": "c3a83f11-d527-4c06-b1b4-47d967f34f9a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1991",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "41daf98d-f977-433e-9336-a7ca8dd73eae",
        "created_date": "2020-05-12T17:31:01.820002+00:00",
        "modified_date": "2020-05-12T17:31:01.820002+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.226579+00:00",
        "etl_stage_id": "41daf98d-f977-433e-9336-a7ca8dd73eae",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "95d92e58-378f-4f55-96ec-72deae4680cf",
        "created_date": "2020-05-12T17:31:01.777512+00:00",
        "modified_date": "2020-05-12T17:31:01.777512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.206279+00:00",
        "etl_stage_id": "95d92e58-378f-4f55-96ec-72deae4680cf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1b850872-ddcb-440a-8ef0-726533175fcc",
        "created_date": "2020-05-12T17:31:01.455804+00:00",
        "modified_date": "2020-05-12T17:31:01.455804+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.194827+00:00",
        "etl_stage_id": "1b850872-ddcb-440a-8ef0-726533175fcc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1816",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "adb6b950-cafe-4c4c-8c7d-d639159692a7",
        "created_date": "2020-05-12T17:31:01.405984+00:00",
        "modified_date": "2020-05-12T17:31:01.405984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.172651+00:00",
        "etl_stage_id": "adb6b950-cafe-4c4c-8c7d-d639159692a7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301-210-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "47e8954f-1904-4ca3-b77d-c5d2512da435",
        "created_date": "2020-05-12T17:31:01.228531+00:00",
        "modified_date": "2020-05-12T17:31:01.228531+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.171319+00:00",
        "etl_stage_id": "47e8954f-1904-4ca3-b77d-c5d2512da435",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755-169-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5f5f1449-72de-4517-9a20-c9c19bec803b",
        "created_date": "2020-05-12T17:31:00.875271+00:00",
        "modified_date": "2020-05-12T17:31:00.875271+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.158359+00:00",
        "etl_stage_id": "5f5f1449-72de-4517-9a20-c9c19bec803b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "68ecc15c-d607-4df3-acb3-2af00c78fc81",
        "created_date": "2020-05-12T17:31:00.838595+00:00",
        "modified_date": "2020-05-12T17:31:00.838595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.132742+00:00",
        "etl_stage_id": "68ecc15c-d607-4df3-acb3-2af00c78fc81",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1731",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7a1ac052-773d-45e8-bdd1-db188bd8da09",
        "created_date": "2020-05-12T17:31:00.804524+00:00",
        "modified_date": "2020-05-12T17:31:00.804524+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.113723+00:00",
        "etl_stage_id": "7a1ac052-773d-45e8-bdd1-db188bd8da09",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b2090489-03ae-478c-957c-78227b950917",
        "created_date": "2020-05-12T17:31:00.655357+00:00",
        "modified_date": "2020-05-12T17:31:00.655357+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.111678+00:00",
        "etl_stage_id": "b2090489-03ae-478c-957c-78227b950917",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300-214-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1b05324c-1599-4d08-a93b-96d3fad0b6e8",
        "created_date": "2020-05-12T17:30:59.819237+00:00",
        "modified_date": "2020-05-12T17:30:59.819237+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.100992+00:00",
        "etl_stage_id": "1b05324c-1599-4d08-a93b-96d3fad0b6e8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "032324f1-b1c2-4d01-a782-6d66cae858ff",
        "created_date": "2020-05-12T17:30:59.754228+00:00",
        "modified_date": "2020-05-12T17:30:59.754228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.085268+00:00",
        "etl_stage_id": "032324f1-b1c2-4d01-a782-6d66cae858ff",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "88c534d1-ba06-4b42-a3e8-4e63092c6af4",
        "created_date": "2020-05-12T17:30:59.682226+00:00",
        "modified_date": "2020-05-12T17:30:59.682226+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.064973+00:00",
        "etl_stage_id": "88c534d1-ba06-4b42-a3e8-4e63092c6af4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1730",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "62e3b460-529c-4edb-b364-928afe52ccf6",
        "created_date": "2020-05-12T17:30:59.642373+00:00",
        "modified_date": "2020-05-12T17:30:59.642373+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.042379+00:00",
        "etl_stage_id": "62e3b460-529c-4edb-b364-928afe52ccf6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fd0b16e3-15bb-4586-8dc6-1557bf8c869f",
        "created_date": "2020-05-12T17:30:59.218258+00:00",
        "modified_date": "2020-05-12T17:30:59.218258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.017007+00:00",
        "etl_stage_id": "fd0b16e3-15bb-4586-8dc6-1557bf8c869f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "21f61aa5-40e5-4251-842e-04107d0c17d1",
        "created_date": "2020-05-12T17:30:59.111144+00:00",
        "modified_date": "2020-05-12T17:30:59.111144+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.005575+00:00",
        "etl_stage_id": "21f61aa5-40e5-4251-842e-04107d0c17d1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1729",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "296b595a-e56f-436d-8110-3affdda24296",
        "created_date": "2020-05-12T17:30:59.106361+00:00",
        "modified_date": "2020-05-12T17:30:59.106361+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.993798+00:00",
        "etl_stage_id": "296b595a-e56f-436d-8110-3affdda24296",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753-167-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9fe8bb6b-fbcb-4473-a511-957fbf1c73ea",
        "created_date": "2020-05-12T17:30:59.077129+00:00",
        "modified_date": "2020-05-12T17:30:59.077129+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.982317+00:00",
        "etl_stage_id": "9fe8bb6b-fbcb-4473-a511-957fbf1c73ea",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299-212-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6533d771-f152-4fc7-9b7d-a112e4801629",
        "created_date": "2020-05-12T17:30:58.711402+00:00",
        "modified_date": "2020-05-12T17:30:58.711402+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.968746+00:00",
        "etl_stage_id": "6533d771-f152-4fc7-9b7d-a112e4801629",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4c423c1a-fec7-4cff-9996-15b9897b5053",
        "created_date": "2020-05-12T17:30:58.568611+00:00",
        "modified_date": "2020-05-12T17:30:58.568611+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.956654+00:00",
        "etl_stage_id": "4c423c1a-fec7-4cff-9996-15b9897b5053",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1728",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1db13dc7-cae2-46e4-90d5-c05f99bd67ca",
        "created_date": "2020-05-12T17:30:58.211995+00:00",
        "modified_date": "2020-05-12T17:30:58.211995+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.944038+00:00",
        "etl_stage_id": "1db13dc7-cae2-46e4-90d5-c05f99bd67ca",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0cf1ce08-6379-4960-ae07-74003629e585",
        "created_date": "2020-05-12T17:30:58.155118+00:00",
        "modified_date": "2020-05-12T17:30:58.155118+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.923886+00:00",
        "etl_stage_id": "0cf1ce08-6379-4960-ae07-74003629e585",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-260-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f62c94af-0709-484c-98ed-14399d0092dd",
        "created_date": "2020-05-12T17:30:57.771165+00:00",
        "modified_date": "2020-05-12T17:30:57.771165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.920545+00:00",
        "etl_stage_id": "f62c94af-0709-484c-98ed-14399d0092dd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "df311cd4-8f3f-4c13-9aba-e4fa91860746",
        "created_date": "2020-05-12T17:30:57.690058+00:00",
        "modified_date": "2020-05-12T17:30:57.690058+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.902781+00:00",
        "etl_stage_id": "df311cd4-8f3f-4c13-9aba-e4fa91860746",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297-213-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "92872766-c828-4b33-90d5-c10b4b116adc",
        "created_date": "2020-05-12T17:30:57.650228+00:00",
        "modified_date": "2020-05-12T17:30:57.650228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.880516+00:00",
        "etl_stage_id": "92872766-c828-4b33-90d5-c10b4b116adc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2294",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7bfc41cf-8fc9-4a40-8133-fbab9793c444",
        "created_date": "2020-05-12T17:30:57.621698+00:00",
        "modified_date": "2020-05-12T17:30:57.621698+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.866792+00:00",
        "etl_stage_id": "7bfc41cf-8fc9-4a40-8133-fbab9793c444",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2481915e-b8d9-4a07-8e4e-fb8e60d91233",
        "created_date": "2020-05-12T17:30:57.031984+00:00",
        "modified_date": "2020-05-12T17:30:57.031984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.855236+00:00",
        "etl_stage_id": "2481915e-b8d9-4a07-8e4e-fb8e60d91233",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2291",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4a321d5f-9dfe-422c-9b2b-d6257bf014ab",
        "created_date": "2020-05-12T17:30:57.024515+00:00",
        "modified_date": "2020-05-12T17:30:57.024515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.843103+00:00",
        "etl_stage_id": "4a321d5f-9dfe-422c-9b2b-d6257bf014ab",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "07fa2b2a-64f1-4549-943d-fa33fbd12569",
        "created_date": "2020-05-12T17:30:56.887752+00:00",
        "modified_date": "2020-05-12T17:30:56.887752+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.820485+00:00",
        "etl_stage_id": "07fa2b2a-64f1-4549-943d-fa33fbd12569",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751-165-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dd118ca5-d7a6-452a-b2ea-43489f06a293",
        "created_date": "2020-05-12T17:30:56.329083+00:00",
        "modified_date": "2020-05-12T17:30:56.329083+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.817734+00:00",
        "etl_stage_id": "dd118ca5-d7a6-452a-b2ea-43489f06a293",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296-211-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b3247ad9-d4e7-4948-aa36-386c1d06d1b7",
        "created_date": "2020-05-12T17:30:56.294400+00:00",
        "modified_date": "2020-05-12T17:30:56.294400+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.790065+00:00",
        "etl_stage_id": "b3247ad9-d4e7-4948-aa36-386c1d06d1b7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "247919ed-30ba-4ec6-b2d2-fd1c5db3de1b",
        "created_date": "2020-05-12T17:30:56.293841+00:00",
        "modified_date": "2020-05-12T17:30:56.293841+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.782678+00:00",
        "etl_stage_id": "247919ed-30ba-4ec6-b2d2-fd1c5db3de1b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2268",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9eb58441-34ac-4de1-a829-c0e9933c9a0b",
        "created_date": "2020-05-12T17:30:55.829709+00:00",
        "modified_date": "2020-05-12T17:30:55.829709+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.771937+00:00",
        "etl_stage_id": "9eb58441-34ac-4de1-a829-c0e9933c9a0b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1d3e3d1a-5d62-4a74-8afa-05d8a47b149a",
        "created_date": "2020-05-12T17:30:55.667592+00:00",
        "modified_date": "2020-05-12T17:30:55.667592+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.756473+00:00",
        "etl_stage_id": "1d3e3d1a-5d62-4a74-8afa-05d8a47b149a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e70b5379-fcd6-410d-ac27-d4a67deb8da0",
        "created_date": "2020-05-12T17:30:55.632116+00:00",
        "modified_date": "2020-05-12T17:30:55.632116+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.744198+00:00",
        "etl_stage_id": "e70b5379-fcd6-410d-ac27-d4a67deb8da0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970-206-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7b763b6b-86aa-48b0-94b7-f26b1453f9bb",
        "created_date": "2020-05-12T17:30:54.922090+00:00",
        "modified_date": "2020-05-12T17:30:54.922090+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.732063+00:00",
        "etl_stage_id": "7b763b6b-86aa-48b0-94b7-f26b1453f9bb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "61b0f132-8b2f-4409-a00b-38f0a08b69e5",
        "created_date": "2020-05-12T17:30:54.821579+00:00",
        "modified_date": "2020-05-12T17:30:54.821579+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.710554+00:00",
        "etl_stage_id": "61b0f132-8b2f-4409-a00b-38f0a08b69e5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f8d99df2-2292-4db6-877b-a070d5b2da50",
        "created_date": "2020-05-12T17:30:54.800103+00:00",
        "modified_date": "2020-05-12T17:30:54.800103+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.705103+00:00",
        "etl_stage_id": "f8d99df2-2292-4db6-877b-a070d5b2da50",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1870",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "53b71061-735c-498c-939d-dce3dcaa4fee",
        "created_date": "2020-05-12T17:30:54.345139+00:00",
        "modified_date": "2020-05-12T17:30:54.345139+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.684902+00:00",
        "etl_stage_id": "53b71061-735c-498c-939d-dce3dcaa4fee",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f3d083d7-ac23-4b68-8a99-0aa8a8e46089",
        "created_date": "2020-05-12T17:30:54.067689+00:00",
        "modified_date": "2020-05-12T17:30:54.067689+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.662303+00:00",
        "etl_stage_id": "f3d083d7-ac23-4b68-8a99-0aa8a8e46089",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3bee4ee7-f7f6-4864-8a68-9b1f201fd0ca",
        "created_date": "2020-05-12T17:30:53.962570+00:00",
        "modified_date": "2020-05-12T17:30:53.962570+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.650135+00:00",
        "etl_stage_id": "3bee4ee7-f7f6-4864-8a68-9b1f201fd0ca",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ce8ddcb8-d2bc-4302-8361-8c80e4df9b96",
        "created_date": "2020-05-12T17:30:53.655455+00:00",
        "modified_date": "2020-05-12T17:30:53.655455+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.638023+00:00",
        "etl_stage_id": "ce8ddcb8-d2bc-4302-8361-8c80e4df9b96",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1869",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6b72dce2-5e37-454f-ba50-d7e9cf6009c4",
        "created_date": "2020-05-12T17:30:53.612958+00:00",
        "modified_date": "2020-05-12T17:30:53.612958+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.605724+00:00",
        "etl_stage_id": "6b72dce2-5e37-454f-ba50-d7e9cf6009c4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5355978f-e5b5-4d2b-8f2a-d90844eb8474",
        "created_date": "2020-05-12T17:30:53.272614+00:00",
        "modified_date": "2020-05-12T17:30:53.272614+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.603044+00:00",
        "etl_stage_id": "5355978f-e5b5-4d2b-8f2a-d90844eb8474",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "432dc2f5-4d2a-4cbc-9add-f869d3083427",
        "created_date": "2020-05-12T17:30:53.093504+00:00",
        "modified_date": "2020-05-12T17:30:53.093504+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.591622+00:00",
        "etl_stage_id": "432dc2f5-4d2a-4cbc-9add-f869d3083427",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1868",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cf196568-2721-42b4-97cf-684c2335c226",
        "created_date": "2020-05-12T17:30:52.677108+00:00",
        "modified_date": "2020-05-12T17:30:52.677108+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.573823+00:00",
        "etl_stage_id": "cf196568-2721-42b4-97cf-684c2335c226",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "aa33f0ba-8c34-46d9-83e6-e7bcc93f474d",
        "created_date": "2020-05-12T17:30:52.425948+00:00",
        "modified_date": "2020-05-12T17:30:52.425948+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.550747+00:00",
        "etl_stage_id": "aa33f0ba-8c34-46d9-83e6-e7bcc93f474d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ceba5b5d-d9ac-4915-a5ee-a338f2c2cbb6",
        "created_date": "2020-05-12T17:30:52.408145+00:00",
        "modified_date": "2020-05-12T17:30:52.408145+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.524040+00:00",
        "etl_stage_id": "ceba5b5d-d9ac-4915-a5ee-a338f2c2cbb6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969-205-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2f1211ba-d7c6-40cd-9cdc-1c82e7034ce5",
        "created_date": "2020-05-12T17:30:52.408731+00:00",
        "modified_date": "2020-05-12T17:30:52.408731+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.545355+00:00",
        "etl_stage_id": "2f1211ba-d7c6-40cd-9cdc-1c82e7034ce5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645-243-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "334cc8e6-dc82-4b90-a5cd-a07bbfe3d030",
        "created_date": "2020-05-12T17:30:51.562011+00:00",
        "modified_date": "2020-05-12T17:30:51.562011+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.502543+00:00",
        "etl_stage_id": "334cc8e6-dc82-4b90-a5cd-a07bbfe3d030",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f2bdc61d-c8e2-45e7-9058-cfb2eaeceb95",
        "created_date": "2020-05-12T17:30:51.551393+00:00",
        "modified_date": "2020-05-12T17:30:51.551393+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.498931+00:00",
        "etl_stage_id": "f2bdc61d-c8e2-45e7-9058-cfb2eaeceb95",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6651baa6-c30e-49ee-854f-c1093dc0bb69",
        "created_date": "2020-05-12T17:30:51.389808+00:00",
        "modified_date": "2020-05-12T17:30:51.389808+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.486643+00:00",
        "etl_stage_id": "6651baa6-c30e-49ee-854f-c1093dc0bb69",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1867",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "516c8998-cc81-42f2-90a6-df2f7925dfc1",
        "created_date": "2020-05-12T17:30:51.281796+00:00",
        "modified_date": "2020-05-12T17:30:51.281796+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.473603+00:00",
        "etl_stage_id": "516c8998-cc81-42f2-90a6-df2f7925dfc1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8bfa3362-98c6-4bfa-bfc8-1661d93cf695",
        "created_date": "2020-05-12T17:30:50.768727+00:00",
        "modified_date": "2020-05-12T17:30:50.768727+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.450406+00:00",
        "etl_stage_id": "8bfa3362-98c6-4bfa-bfc8-1661d93cf695",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968-204-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8fd2d44b-2d56-4e4b-9034-e66807a1a6e2",
        "created_date": "2020-05-12T17:30:50.677272+00:00",
        "modified_date": "2020-05-12T17:30:50.677272+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.437072+00:00",
        "etl_stage_id": "8fd2d44b-2d56-4e4b-9034-e66807a1a6e2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1866",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4e32d88b-5fa2-43cb-97dd-80d2aa7f3b0e",
        "created_date": "2020-05-12T17:30:49.598777+00:00",
        "modified_date": "2020-05-12T17:30:49.598777+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.425348+00:00",
        "etl_stage_id": "4e32d88b-5fa2-43cb-97dd-80d2aa7f3b0e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1911",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "edf850ce-da7b-4c9e-ab21-e1ccae5da30b",
        "created_date": "2020-05-12T17:30:49.597764+00:00",
        "modified_date": "2020-05-12T17:30:49.597764+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.386204+00:00",
        "etl_stage_id": "edf850ce-da7b-4c9e-ab21-e1ccae5da30b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a4159a38-4a97-42e3-982e-fd5266d9936d",
        "created_date": "2020-05-12T17:30:49.202943+00:00",
        "modified_date": "2020-05-12T17:30:49.202943+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.374820+00:00",
        "etl_stage_id": "a4159a38-4a97-42e3-982e-fd5266d9936d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b008e333-bb44-4774-b1d2-2985df95534f",
        "created_date": "2020-05-12T17:30:48.902846+00:00",
        "modified_date": "2020-05-12T17:30:48.902846+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.361874+00:00",
        "etl_stage_id": "b008e333-bb44-4774-b1d2-2985df95534f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907-244-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1704dd7e-2739-4da5-a151-c17cc1478277",
        "created_date": "2020-05-12T17:30:48.648950+00:00",
        "modified_date": "2020-05-12T17:30:48.648950+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.338691+00:00",
        "etl_stage_id": "1704dd7e-2739-4da5-a151-c17cc1478277",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1883",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c50c70db-fe9b-4770-bbe6-35c75fc76e70",
        "created_date": "2020-05-12T17:30:48.267874+00:00",
        "modified_date": "2020-05-12T17:30:48.267874+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.325259+00:00",
        "etl_stage_id": "c50c70db-fe9b-4770-bbe6-35c75fc76e70",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6e6d803b-119d-488f-814b-646552b38cb4",
        "created_date": "2020-05-12T17:30:48.119896+00:00",
        "modified_date": "2020-05-12T17:30:48.119896+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.297989+00:00",
        "etl_stage_id": "6e6d803b-119d-488f-814b-646552b38cb4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966-202-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "69143a7d-f86e-40c9-8d27-d006651dcb03",
        "created_date": "2020-05-12T17:30:48.030068+00:00",
        "modified_date": "2020-05-12T17:30:48.030068+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.294369+00:00",
        "etl_stage_id": "69143a7d-f86e-40c9-8d27-d006651dcb03",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "05611d6f-a0c1-4ab3-9b49-fa8f82b5d778",
        "created_date": "2020-05-12T17:30:47.728955+00:00",
        "modified_date": "2020-05-12T17:30:47.728955+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.281342+00:00",
        "etl_stage_id": "05611d6f-a0c1-4ab3-9b49-fa8f82b5d778",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1865",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "20dc2d35-c3f2-491f-bab5-22e30cce78b5",
        "created_date": "2020-05-12T17:30:47.602762+00:00",
        "modified_date": "2020-05-12T17:30:47.602762+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.267935+00:00",
        "etl_stage_id": "20dc2d35-c3f2-491f-bab5-22e30cce78b5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e7f0e430-a7c1-438f-82d6-52d9e74043cb",
        "created_date": "2020-05-12T17:30:47.210656+00:00",
        "modified_date": "2020-05-12T17:30:47.210656+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.246294+00:00",
        "etl_stage_id": "e7f0e430-a7c1-438f-82d6-52d9e74043cb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "50cf230b-4a01-4f6a-a404-4ab640a3a679",
        "created_date": "2020-05-12T17:30:46.979651+00:00",
        "modified_date": "2020-05-12T17:30:46.979651+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.232341+00:00",
        "etl_stage_id": "50cf230b-4a01-4f6a-a404-4ab640a3a679",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1903",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1990b33b-0727-482d-9394-9cd024c6a86b",
        "created_date": "2020-05-12T17:30:46.917815+00:00",
        "modified_date": "2020-05-12T17:30:46.917815+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.220936+00:00",
        "etl_stage_id": "1990b33b-0727-482d-9394-9cd024c6a86b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a9486008-c051-4b84-8b4b-d93f3919bf07",
        "created_date": "2020-05-12T17:30:46.230131+00:00",
        "modified_date": "2020-05-12T17:30:46.230131+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.207652+00:00",
        "etl_stage_id": "a9486008-c051-4b84-8b4b-d93f3919bf07",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1902",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cf54c285-ae32-4b19-adce-508265b3c5ef",
        "created_date": "2020-05-12T17:30:46.169165+00:00",
        "modified_date": "2020-05-12T17:30:46.169165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.179445+00:00",
        "etl_stage_id": "cf54c285-ae32-4b19-adce-508265b3c5ef",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1864",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b9d6c195-371b-4c08-965a-e6ae2b611e8f",
        "created_date": "2020-05-12T17:30:45.431569+00:00",
        "modified_date": "2020-05-12T17:30:45.431569+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.172914+00:00",
        "etl_stage_id": "b9d6c195-371b-4c08-965a-e6ae2b611e8f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965-201-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "10acd166-8183-4156-a05d-7e6b487542f8",
        "created_date": "2020-05-12T17:30:45.386371+00:00",
        "modified_date": "2020-05-12T17:30:45.386371+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.151270+00:00",
        "etl_stage_id": "10acd166-8183-4156-a05d-7e6b487542f8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4df34c6c-c455-4c0f-af98-0e509396bd42",
        "created_date": "2020-05-12T17:30:45.128872+00:00",
        "modified_date": "2020-05-12T17:30:45.128872+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.131197+00:00",
        "etl_stage_id": "4df34c6c-c455-4c0f-af98-0e509396bd42",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "26d31856-0df7-4d1b-95cc-b2540c1addce",
        "created_date": "2020-05-12T17:30:45.127952+00:00",
        "modified_date": "2020-05-12T17:30:45.127952+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.117759+00:00",
        "etl_stage_id": "26d31856-0df7-4d1b-95cc-b2540c1addce",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1901",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a82773dd-a377-46d1-bcc5-ec54c30cbd9a",
        "created_date": "2020-05-12T17:30:44.936515+00:00",
        "modified_date": "2020-05-12T17:30:44.936515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.098882+00:00",
        "etl_stage_id": "a82773dd-a377-46d1-bcc5-ec54c30cbd9a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "59007487-bace-4770-bd21-b0de9a5c7ecf",
        "created_date": "2020-05-12T17:30:43.995926+00:00",
        "modified_date": "2020-05-12T17:30:43.995926+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.086583+00:00",
        "etl_stage_id": "59007487-bace-4770-bd21-b0de9a5c7ecf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c03d89eb-d8a3-466e-ada4-4d4375537066",
        "created_date": "2020-05-12T17:30:43.961258+00:00",
        "modified_date": "2020-05-12T17:30:43.961258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.064072+00:00",
        "etl_stage_id": "c03d89eb-d8a3-466e-ada4-4d4375537066",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838-239-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9e556d7f-4142-43b4-89a1-680d0879a1d6",
        "created_date": "2020-05-12T17:30:43.863444+00:00",
        "modified_date": "2020-05-12T17:30:43.863444+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.060486+00:00",
        "etl_stage_id": "9e556d7f-4142-43b4-89a1-680d0879a1d6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b663a1f5-e6a5-40ba-bf37-273ca89898b5",
        "created_date": "2020-05-12T17:30:43.434460+00:00",
        "modified_date": "2020-05-12T17:30:43.434460+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.049248+00:00",
        "etl_stage_id": "b663a1f5-e6a5-40ba-bf37-273ca89898b5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1863",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7ec30f5a-8223-4430-a9b9-9403ca32a3fc",
        "created_date": "2020-05-12T17:30:43.388607+00:00",
        "modified_date": "2020-05-12T17:30:43.388607+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.025967+00:00",
        "etl_stage_id": "7ec30f5a-8223-4430-a9b9-9403ca32a3fc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2c86f808-6f12-4598-88fc-6135628c6b96",
        "created_date": "2020-05-12T17:30:42.836254+00:00",
        "modified_date": "2020-05-12T17:30:42.836254+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.002019+00:00",
        "etl_stage_id": "2c86f808-6f12-4598-88fc-6135628c6b96",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c2ed6f21-2751-41d8-b14b-92c5e7b8e978",
        "created_date": "2020-05-12T17:30:42.760655+00:00",
        "modified_date": "2020-05-12T17:30:42.760655+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.988995+00:00",
        "etl_stage_id": "c2ed6f21-2751-41d8-b14b-92c5e7b8e978",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964-200-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e445f5a5-1416-4351-b852-ff221fdbcc7e",
        "created_date": "2020-05-12T17:30:42.583473+00:00",
        "modified_date": "2020-05-12T17:30:42.583473+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.975269+00:00",
        "etl_stage_id": "e445f5a5-1416-4351-b852-ff221fdbcc7e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1862",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5f3e1f51-1f81-4061-858c-c6ad04dc9d6c",
        "created_date": "2020-05-12T17:30:42.182364+00:00",
        "modified_date": "2020-05-12T17:30:42.182364+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.952564+00:00",
        "etl_stage_id": "5f3e1f51-1f81-4061-858c-c6ad04dc9d6c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6e31460b-60b6-4f6f-92f8-6f81b974c859",
        "created_date": "2020-05-12T17:30:42.103935+00:00",
        "modified_date": "2020-05-12T17:30:42.103935+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.947893+00:00",
        "etl_stage_id": "6e31460b-60b6-4f6f-92f8-6f81b974c859",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bd5647bb-104a-4d91-95bc-ec06d8d80dcc",
        "created_date": "2020-05-12T17:30:41.746100+00:00",
        "modified_date": "2020-05-12T17:30:41.746100+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.925826+00:00",
        "etl_stage_id": "bd5647bb-104a-4d91-95bc-ec06d8d80dcc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ca6b8053-fc4d-4ad1-9944-8cf01bd519c4",
        "created_date": "2020-05-12T17:30:41.707420+00:00",
        "modified_date": "2020-05-12T17:30:41.707420+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.915798+00:00",
        "etl_stage_id": "ca6b8053-fc4d-4ad1-9944-8cf01bd519c4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1545",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "931a280a-5342-46b5-8126-7ac400523135",
        "created_date": "2020-05-12T17:30:41.444447+00:00",
        "modified_date": "2020-05-12T17:30:41.444447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.902263+00:00",
        "etl_stage_id": "931a280a-5342-46b5-8126-7ac400523135",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837-238-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ab5f9087-0d9f-484b-8eb0-c648dc979dd4",
        "created_date": "2020-05-12T17:30:41.244891+00:00",
        "modified_date": "2020-05-12T17:30:41.244891+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.885597+00:00",
        "etl_stage_id": "ab5f9087-0d9f-484b-8eb0-c648dc979dd4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1861",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fb5613ff-2d50-4ead-a8e0-49abce3f391b",
        "created_date": "2020-05-12T17:30:41.019712+00:00",
        "modified_date": "2020-05-12T17:30:41.019712+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.872551+00:00",
        "etl_stage_id": "fb5613ff-2d50-4ead-a8e0-49abce3f391b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e797c75c-50a2-4122-bc10-599ed196fa88",
        "created_date": "2020-05-12T17:30:40.574079+00:00",
        "modified_date": "2020-05-12T17:30:40.574079+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.858747+00:00",
        "etl_stage_id": "e797c75c-50a2-4122-bc10-599ed196fa88",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963-199-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "938d2bd1-55c8-41a2-94c6-a13983faa727",
        "created_date": "2020-05-12T17:30:40.465666+00:00",
        "modified_date": "2020-05-12T17:30:40.465666+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.845888+00:00",
        "etl_stage_id": "938d2bd1-55c8-41a2-94c6-a13983faa727",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1163",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c8bc1f9f-658a-477f-b643-d57372790a12",
        "created_date": "2020-05-12T17:30:40.064046+00:00",
        "modified_date": "2020-05-12T17:30:40.064046+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.832339+00:00",
        "etl_stage_id": "c8bc1f9f-658a-477f-b643-d57372790a12",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6be1b0b1-d421-4381-9513-8c7a84fa1029",
        "created_date": "2020-05-12T17:30:39.829304+00:00",
        "modified_date": "2020-05-12T17:30:39.829304+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.818867+00:00",
        "etl_stage_id": "6be1b0b1-d421-4381-9513-8c7a84fa1029",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1989",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c19622a1-ebb9-4caa-9b5f-69b0e0a82acd",
        "created_date": "2020-05-12T17:30:39.438690+00:00",
        "modified_date": "2020-05-12T17:30:39.438690+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.797205+00:00",
        "etl_stage_id": "c19622a1-ebb9-4caa-9b5f-69b0e0a82acd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d9ae4cd7-51f9-4a80-8909-e30a327f196d",
        "created_date": "2020-05-12T17:30:39.372095+00:00",
        "modified_date": "2020-05-12T17:30:39.372095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.781994+00:00",
        "etl_stage_id": "d9ae4cd7-51f9-4a80-8909-e30a327f196d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2285",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0f6884b0-350e-44aa-ba35-1ea8d5a9538c",
        "created_date": "2020-05-12T17:30:38.967856+00:00",
        "modified_date": "2020-05-12T17:30:38.967856+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.763164+00:00",
        "etl_stage_id": "0f6884b0-350e-44aa-ba35-1ea8d5a9538c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312-224-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "89b39cf9-79d0-41a2-8ebc-d640fbe09f57",
        "created_date": "2020-05-12T17:30:38.452632+00:00",
        "modified_date": "2020-05-12T17:30:38.452632+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.740706+00:00",
        "etl_stage_id": "89b39cf9-79d0-41a2-8ebc-d640fbe09f57",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962-198-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9e972358-07ee-4ee2-9d19-e8fbf2948721",
        "created_date": "2020-05-12T17:30:38.251788+00:00",
        "modified_date": "2020-05-12T17:30:38.251788+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.737781+00:00",
        "etl_stage_id": "9e972358-07ee-4ee2-9d19-e8fbf2948721",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831-172-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "480cdf0b-8524-4c62-805f-be4b01d5fc70",
        "created_date": "2020-05-12T17:30:37.637595+00:00",
        "modified_date": "2020-05-12T17:30:37.637595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.724706+00:00",
        "etl_stage_id": "480cdf0b-8524-4c62-805f-be4b01d5fc70",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f75d4edf-948d-48e4-b5e4-0f8d792b65f8",
        "created_date": "2020-05-12T17:30:37.023513+00:00",
        "modified_date": "2020-05-12T17:30:37.023513+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.702322+00:00",
        "etl_stage_id": "f75d4edf-948d-48e4-b5e4-0f8d792b65f8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1988",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6a31cff8-5bac-46e0-9250-f6375b0fa60d",
        "created_date": "2020-05-12T17:30:36.934389+00:00",
        "modified_date": "2020-05-12T17:30:36.934389+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.671477+00:00",
        "etl_stage_id": "6a31cff8-5bac-46e0-9250-f6375b0fa60d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284-245-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "31aa6755-5ea7-4c30-b75e-b477e8f33e5e",
        "created_date": "2020-05-12T17:30:36.721366+00:00",
        "modified_date": "2020-05-12T17:30:36.721366+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.663531+00:00",
        "etl_stage_id": "31aa6755-5ea7-4c30-b75e-b477e8f33e5e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8cd787bb-c78b-4ddb-8717-56788cfeef0f",
        "created_date": "2020-05-12T17:30:36.191727+00:00",
        "modified_date": "2020-05-12T17:30:36.191727+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.646161+00:00",
        "etl_stage_id": "8cd787bb-c78b-4ddb-8717-56788cfeef0f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7059726f-ddb5-43a3-b78e-18403a6477c3",
        "created_date": "2020-05-12T17:30:35.713251+00:00",
        "modified_date": "2020-05-12T17:30:35.713251+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.613233+00:00",
        "etl_stage_id": "7059726f-ddb5-43a3-b78e-18403a6477c3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1987",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9d9d6734-bb5a-4e5a-85db-a0d37bada921",
        "created_date": "2020-05-12T17:30:35.651709+00:00",
        "modified_date": "2020-05-12T17:30:35.651709+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.591603+00:00",
        "etl_stage_id": "9d9d6734-bb5a-4e5a-85db-a0d37bada921",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1c633690-520b-4bd3-a846-605bc3e1004c",
        "created_date": "2020-05-12T17:30:35.491527+00:00",
        "modified_date": "2020-05-12T17:30:35.491527+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.587379+00:00",
        "etl_stage_id": "1c633690-520b-4bd3-a846-605bc3e1004c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961-197-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fce38907-b9ac-4d30-8ed4-e0ed569dba75",
        "created_date": "2020-05-12T17:30:35.175545+00:00",
        "modified_date": "2020-05-12T17:30:35.175545+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.564468+00:00",
        "etl_stage_id": "fce38907-b9ac-4d30-8ed4-e0ed569dba75",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2311",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0c09f865-765d-4b02-a0a8-d4000ed5ac2e",
        "created_date": "2020-05-12T17:30:34.874291+00:00",
        "modified_date": "2020-05-12T17:30:34.874291+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.543552+00:00",
        "etl_stage_id": "0c09f865-765d-4b02-a0a8-d4000ed5ac2e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829-171-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7c318a0b-4069-4ba0-b17d-c24dc72b9be6",
        "created_date": "2020-05-12T17:30:34.810977+00:00",
        "modified_date": "2020-05-12T17:30:34.810977+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.540788+00:00",
        "etl_stage_id": "7c318a0b-4069-4ba0-b17d-c24dc72b9be6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2c7b4d14-1e0a-4aea-9f31-0ca11d0183d6",
        "created_date": "2020-05-12T17:30:34.371857+00:00",
        "modified_date": "2020-05-12T17:30:34.371857+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.519956+00:00",
        "etl_stage_id": "2c7b4d14-1e0a-4aea-9f31-0ca11d0183d6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "117e6278-5388-4d99-a99b-3275fcec8aff",
        "created_date": "2020-05-12T17:30:33.675739+00:00",
        "modified_date": "2020-05-12T17:30:33.675739+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.517249+00:00",
        "etl_stage_id": "117e6278-5388-4d99-a99b-3275fcec8aff",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954-190-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f44ddd11-1b66-42a9-b75d-81de796d62ff",
        "created_date": "2020-05-12T17:30:33.057052+00:00",
        "modified_date": "2020-05-12T17:30:33.057052+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.504844+00:00",
        "etl_stage_id": "f44ddd11-1b66-42a9-b75d-81de796d62ff",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1986",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d409748a-d6b0-4605-bcec-293b94329d2e",
        "created_date": "2020-05-12T17:30:32.896103+00:00",
        "modified_date": "2020-05-12T17:30:32.896103+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.489467+00:00",
        "etl_stage_id": "d409748a-d6b0-4605-bcec-293b94329d2e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c1cbee0f-6a83-4dbd-aa59-eef54a74d2ff",
        "created_date": "2020-05-12T17:30:32.795561+00:00",
        "modified_date": "2020-05-12T17:30:32.795561+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.455185+00:00",
        "etl_stage_id": "c1cbee0f-6a83-4dbd-aa59-eef54a74d2ff",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a1b6a7d7-160f-4284-9a53-f76560273ae4",
        "created_date": "2020-05-12T17:30:32.168009+00:00",
        "modified_date": "2020-05-12T17:30:32.168009+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.445549+00:00",
        "etl_stage_id": "a1b6a7d7-160f-4284-9a53-f76560273ae4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310-223-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0e946eff-9af8-4f5c-be1b-734cc4ec79ff",
        "created_date": "2020-05-12T17:30:31.987648+00:00",
        "modified_date": "2020-05-12T17:30:31.987648+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.431063+00:00",
        "etl_stage_id": "0e946eff-9af8-4f5c-be1b-734cc4ec79ff",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "620ffd69-79a7-4a60-ada8-e7ad74ce0690",
        "created_date": "2020-05-12T17:30:31.949741+00:00",
        "modified_date": "2020-05-12T17:30:31.949741+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.400341+00:00",
        "etl_stage_id": "620ffd69-79a7-4a60-ada8-e7ad74ce0690",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c918e6f7-5de3-47ed-afe7-3bfca96aa9be",
        "created_date": "2020-05-12T17:30:31.505289+00:00",
        "modified_date": "2020-05-12T17:30:31.505289+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.383220+00:00",
        "etl_stage_id": "c918e6f7-5de3-47ed-afe7-3bfca96aa9be",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1985",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f729fd79-eb38-4ff7-83fc-13457d2ea6fc",
        "created_date": "2020-05-12T17:30:31.369923+00:00",
        "modified_date": "2020-05-12T17:30:31.369923+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.371099+00:00",
        "etl_stage_id": "f729fd79-eb38-4ff7-83fc-13457d2ea6fc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a4e8b8a0-c629-46c3-a1e8-93261e724cc7",
        "created_date": "2020-05-12T17:30:30.501010+00:00",
        "modified_date": "2020-05-12T17:30:30.501010+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.358277+00:00",
        "etl_stage_id": "a4e8b8a0-c629-46c3-a1e8-93261e724cc7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "31dc0661-03b6-481b-ba54-948423c0c53d",
        "created_date": "2020-05-12T17:30:30.424808+00:00",
        "modified_date": "2020-05-12T17:30:30.424808+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.319417+00:00",
        "etl_stage_id": "31dc0661-03b6-481b-ba54-948423c0c53d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-246-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "40dd01a5-d109-4bde-aacc-eec18cab8355",
        "created_date": "2020-05-12T17:30:30.210512+00:00",
        "modified_date": "2020-05-12T17:30:30.210512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.305471+00:00",
        "etl_stage_id": "40dd01a5-d109-4bde-aacc-eec18cab8355",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801-187-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6ded4efb-51d0-4375-80e2-1a5920c58330",
        "created_date": "2020-05-12T17:30:29.419687+00:00",
        "modified_date": "2020-05-12T17:30:29.419687+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.294000+00:00",
        "etl_stage_id": "6ded4efb-51d0-4375-80e2-1a5920c58330",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1984",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0a494b93-7a9f-4207-898f-efff443187c6",
        "created_date": "2020-05-12T17:30:28.895891+00:00",
        "modified_date": "2020-05-12T17:30:28.895891+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.271610+00:00",
        "etl_stage_id": "0a494b93-7a9f-4207-898f-efff443187c6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2d7dba71-ca85-4925-ae63-646bf7f1d2bc",
        "created_date": "2020-05-12T17:30:28.479261+00:00",
        "modified_date": "2020-05-12T17:30:28.479261+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.237235+00:00",
        "etl_stage_id": "2d7dba71-ca85-4925-ae63-646bf7f1d2bc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d9f8ed9b-ece6-4754-856b-0b3bb0bba498",
        "created_date": "2020-05-12T17:30:28.346044+00:00",
        "modified_date": "2020-05-12T17:30:28.346044+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.221911+00:00",
        "etl_stage_id": "d9f8ed9b-ece6-4754-856b-0b3bb0bba498",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309-222-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ca01cf9b-df89-4d8d-9b99-761db927e827",
        "created_date": "2020-05-12T17:30:28.132738+00:00",
        "modified_date": "2020-05-12T17:30:28.132738+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.216175+00:00",
        "etl_stage_id": "ca01cf9b-df89-4d8d-9b99-761db927e827",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ec052466-de38-454c-9cef-b9a4ddb092aa",
        "created_date": "2020-05-12T17:30:28.103722+00:00",
        "modified_date": "2020-05-12T17:30:28.103722+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.193591+00:00",
        "etl_stage_id": "ec052466-de38-454c-9cef-b9a4ddb092aa",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1983",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8379784f-bbdd-4e18-a282-0256138a32ef",
        "created_date": "2020-05-12T17:30:27.803171+00:00",
        "modified_date": "2020-05-12T17:30:27.803171+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.170596+00:00",
        "etl_stage_id": "8379784f-bbdd-4e18-a282-0256138a32ef",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1750",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c41ee5cf-a99a-402c-b583-a59a59d8f280",
        "created_date": "2020-05-12T17:30:27.483116+00:00",
        "modified_date": "2020-05-12T17:30:27.483116+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.159068+00:00",
        "etl_stage_id": "c41ee5cf-a99a-402c-b583-a59a59d8f280",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783-146-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "01fd5e1b-8287-4390-9b86-f5cd6291ba74",
        "created_date": "2020-05-12T17:30:27.150550+00:00",
        "modified_date": "2020-05-12T17:30:27.150550+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.146173+00:00",
        "etl_stage_id": "01fd5e1b-8287-4390-9b86-f5cd6291ba74",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b56e35aa-97ad-4ec5-ad5b-9657794d983d",
        "created_date": "2020-05-12T17:30:27.116637+00:00",
        "modified_date": "2020-05-12T17:30:27.116637+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.133370+00:00",
        "etl_stage_id": "b56e35aa-97ad-4ec5-ad5b-9657794d983d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "37924efb-f0d7-4749-a885-918a68cf9dd1",
        "created_date": "2020-05-12T17:30:26.483977+00:00",
        "modified_date": "2020-05-12T17:30:26.483977+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.121896+00:00",
        "etl_stage_id": "37924efb-f0d7-4749-a885-918a68cf9dd1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1749",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "de263c4e-3459-4116-b597-62b4978c7b5c",
        "created_date": "2020-05-12T17:30:26.303892+00:00",
        "modified_date": "2020-05-12T17:30:26.303892+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.110408+00:00",
        "etl_stage_id": "de263c4e-3459-4116-b597-62b4978c7b5c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "87b7aaa3-5375-4adb-941a-cd6d0e90fc58",
        "created_date": "2020-05-12T17:30:25.988377+00:00",
        "modified_date": "2020-05-12T17:30:25.988377+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.097985+00:00",
        "etl_stage_id": "87b7aaa3-5375-4adb-941a-cd6d0e90fc58",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578-61-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c539b3bd-dfdb-4718-8ca8-2a6d298ae8a3",
        "created_date": "2020-05-12T17:30:25.387194+00:00",
        "modified_date": "2020-05-12T17:30:25.387194+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.084371+00:00",
        "etl_stage_id": "c539b3bd-dfdb-4718-8ca8-2a6d298ae8a3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6d94e406-1b80-4e81-8021-0060c8f9e022",
        "created_date": "2020-05-12T17:30:25.354957+00:00",
        "modified_date": "2020-05-12T17:30:25.354957+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.066124+00:00",
        "etl_stage_id": "6d94e406-1b80-4e81-8021-0060c8f9e022",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781-144-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7cf4442d-7304-4074-849a-66ab79ac21e3",
        "created_date": "2020-05-12T17:30:25.110099+00:00",
        "modified_date": "2020-05-12T17:30:25.110099+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.041485+00:00",
        "etl_stage_id": "7cf4442d-7304-4074-849a-66ab79ac21e3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1982",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bbadbcb3-3c25-4839-aa74-7026e381941f",
        "created_date": "2020-05-12T17:30:24.609641+00:00",
        "modified_date": "2020-05-12T17:30:24.609641+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.018585+00:00",
        "etl_stage_id": "bbadbcb3-3c25-4839-aa74-7026e381941f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308-221-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7d81210d-0607-47fd-86bc-1f155774b090",
        "created_date": "2020-05-12T17:30:24.330609+00:00",
        "modified_date": "2020-05-12T17:30:24.330609+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.996317+00:00",
        "etl_stage_id": "7d81210d-0607-47fd-86bc-1f155774b090",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7bb9fa3d-137a-4465-904e-f17265ca5da4",
        "created_date": "2020-05-12T17:30:24.095893+00:00",
        "modified_date": "2020-05-12T17:30:24.095893+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.994321+00:00",
        "etl_stage_id": "7bb9fa3d-137a-4465-904e-f17265ca5da4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cc637b82-8497-4aaa-9577-ccbec2bdd7ce",
        "created_date": "2020-05-12T17:30:23.869815+00:00",
        "modified_date": "2020-05-12T17:30:23.869815+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.980743+00:00",
        "etl_stage_id": "cc637b82-8497-4aaa-9577-ccbec2bdd7ce",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024-241-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7cbb134a-9443-4c15-b2f1-646ba7f7b16b",
        "created_date": "2020-05-12T17:30:23.293708+00:00",
        "modified_date": "2020-05-12T17:30:23.293708+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.957011+00:00",
        "etl_stage_id": "7cbb134a-9443-4c15-b2f1-646ba7f7b16b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "35a4f1d3-a414-44d4-b169-72d8dbbfcdab",
        "created_date": "2020-05-12T17:30:22.760201+00:00",
        "modified_date": "2020-05-12T17:30:22.760201+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.955015+00:00",
        "etl_stage_id": "35a4f1d3-a414-44d4-b169-72d8dbbfcdab",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1981",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a72bbe01-dc40-47be-b37b-bbd43c2ada0d",
        "created_date": "2020-05-12T17:30:22.744991+00:00",
        "modified_date": "2020-05-12T17:30:22.744991+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.942666+00:00",
        "etl_stage_id": "a72bbe01-dc40-47be-b37b-bbd43c2ada0d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478-43-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "90794991-0c66-47e2-b4f5-019d39bec4a8",
        "created_date": "2020-05-12T17:30:22.098194+00:00",
        "modified_date": "2020-05-12T17:30:22.098194+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.916316+00:00",
        "etl_stage_id": "90794991-0c66-47e2-b4f5-019d39bec4a8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779-142-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f543a7b9-f51b-4d85-b619-afea29fdca46",
        "created_date": "2020-05-12T17:30:21.831924+00:00",
        "modified_date": "2020-05-12T17:30:21.831924+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.902409+00:00",
        "etl_stage_id": "f543a7b9-f51b-4d85-b619-afea29fdca46",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1980",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f7813d7f-da2c-4025-87c5-28f039f736c4",
        "created_date": "2020-05-12T17:30:21.648447+00:00",
        "modified_date": "2020-05-12T17:30:21.648447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.878267+00:00",
        "etl_stage_id": "f7813d7f-da2c-4025-87c5-28f039f736c4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c1ad2cb9-1ff7-42ec-adc6-f4f2524541d3",
        "created_date": "2020-05-12T17:30:21.356339+00:00",
        "modified_date": "2020-05-12T17:30:21.356339+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.852317+00:00",
        "etl_stage_id": "c1ad2cb9-1ff7-42ec-adc6-f4f2524541d3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fa2470dc-66dd-47ea-a3fa-6f442bb9072b",
        "created_date": "2020-05-12T17:30:21.295062+00:00",
        "modified_date": "2020-05-12T17:30:21.295062+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.833845+00:00",
        "etl_stage_id": "fa2470dc-66dd-47ea-a3fa-6f442bb9072b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307-220-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "450ba299-0d5b-443c-8867-71930484a399",
        "created_date": "2020-05-12T17:30:21.117003+00:00",
        "modified_date": "2020-05-12T17:30:21.117003+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.809998+00:00",
        "etl_stage_id": "450ba299-0d5b-443c-8867-71930484a399",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1979",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "86b0b3c5-1b1c-44c2-8c99-e48ec995b0f1",
        "created_date": "2020-05-12T17:30:20.811212+00:00",
        "modified_date": "2020-05-12T17:30:20.811212+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.767013+00:00",
        "etl_stage_id": "86b0b3c5-1b1c-44c2-8c99-e48ec995b0f1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023-240-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fcff3c8f-0bb2-4fc0-a57a-3f240d9d4401",
        "created_date": "2020-05-12T17:30:20.277664+00:00",
        "modified_date": "2020-05-12T17:30:20.277664+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.763407+00:00",
        "etl_stage_id": "fcff3c8f-0bb2-4fc0-a57a-3f240d9d4401",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477-42-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "60c90610-6de5-4e90-923b-ad9bbdc1b687",
        "created_date": "2020-05-12T17:30:20.242518+00:00",
        "modified_date": "2020-05-12T17:30:20.242518+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.751841+00:00",
        "etl_stage_id": "60c90610-6de5-4e90-923b-ad9bbdc1b687",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d4cd5d40-3b22-4acd-bbd6-c7352aec403b",
        "created_date": "2020-05-12T17:30:20.077930+00:00",
        "modified_date": "2020-05-12T17:30:20.077930+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.726244+00:00",
        "etl_stage_id": "d4cd5d40-3b22-4acd-bbd6-c7352aec403b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0a667585-3594-4fca-ae92-d14d9c6b4eca",
        "created_date": "2020-05-12T17:30:19.952777+00:00",
        "modified_date": "2020-05-12T17:30:19.952777+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.716142+00:00",
        "etl_stage_id": "0a667585-3594-4fca-ae92-d14d9c6b4eca",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1978",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "83bf832a-6090-4157-b098-cda3e0a43331",
        "created_date": "2020-05-12T17:30:19.547427+00:00",
        "modified_date": "2020-05-12T17:30:19.547427+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.702618+00:00",
        "etl_stage_id": "83bf832a-6090-4157-b098-cda3e0a43331",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3c94b4cc-88fc-4129-a520-e12b1fbdf919",
        "created_date": "2020-05-12T17:30:19.427762+00:00",
        "modified_date": "2020-05-12T17:30:19.427762+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.688991+00:00",
        "etl_stage_id": "3c94b4cc-88fc-4129-a520-e12b1fbdf919",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777-140-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5dbf846e-17a9-4894-abcf-8f4a073e9ae1",
        "created_date": "2020-05-12T17:30:19.271732+00:00",
        "modified_date": "2020-05-12T17:30:19.271732+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.669836+00:00",
        "etl_stage_id": "5dbf846e-17a9-4894-abcf-8f4a073e9ae1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306-219-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f88f477a-6fd6-4dc4-ba37-e9bb65d9932e",
        "created_date": "2020-05-12T17:30:18.953750+00:00",
        "modified_date": "2020-05-12T17:30:18.953750+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.658392+00:00",
        "etl_stage_id": "f88f477a-6fd6-4dc4-ba37-e9bb65d9932e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476-47-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "01499981-5cda-4c3b-a78b-a303c3f1759b",
        "created_date": "2020-05-12T17:30:18.761430+00:00",
        "modified_date": "2020-05-12T17:30:18.761430+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.646304+00:00",
        "etl_stage_id": "01499981-5cda-4c3b-a78b-a303c3f1759b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1887",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d02099f1-ba1c-4ea8-aed1-a1488b9cabf0",
        "created_date": "2020-05-12T17:30:18.030874+00:00",
        "modified_date": "2020-05-12T17:30:18.030874+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.636173+00:00",
        "etl_stage_id": "d02099f1-ba1c-4ea8-aed1-a1488b9cabf0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dc90bc59-9dd5-41f2-aefe-53eaba276f00",
        "created_date": "2020-05-12T17:30:17.929715+00:00",
        "modified_date": "2020-05-12T17:30:17.929715+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.615907+00:00",
        "etl_stage_id": "dc90bc59-9dd5-41f2-aefe-53eaba276f00",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "af15f9ea-7681-457b-bfd9-10a1eb2106ce",
        "created_date": "2020-05-12T17:30:17.888162+00:00",
        "modified_date": "2020-05-12T17:30:17.888162+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.604381+00:00",
        "etl_stage_id": "af15f9ea-7681-457b-bfd9-10a1eb2106ce",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "53d42be8-25f6-44ef-bc66-96aae86bb886",
        "created_date": "2020-05-12T17:30:17.806905+00:00",
        "modified_date": "2020-05-12T17:30:17.806905+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.591571+00:00",
        "etl_stage_id": "53d42be8-25f6-44ef-bc66-96aae86bb886",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1885",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dea0e2f8-7cc6-474a-bac3-bff5e065f615",
        "created_date": "2020-05-12T17:30:17.294140+00:00",
        "modified_date": "2020-05-12T17:30:17.294140+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.559272+00:00",
        "etl_stage_id": "dea0e2f8-7cc6-474a-bac3-bff5e065f615",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305-218-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1c648654-c3f8-464f-8b61-a7f66d949213",
        "created_date": "2020-05-12T17:30:17.179794+00:00",
        "modified_date": "2020-05-12T17:30:17.179794+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.557261+00:00",
        "etl_stage_id": "1c648654-c3f8-464f-8b61-a7f66d949213",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475-46-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3e92cbd8-33d6-41f1-be1e-095d2ed8df4e",
        "created_date": "2020-05-12T17:30:16.975650+00:00",
        "modified_date": "2020-05-12T17:30:16.975650+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.544977+00:00",
        "etl_stage_id": "3e92cbd8-33d6-41f1-be1e-095d2ed8df4e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "eeec22ce-cba9-4cc2-8ed7-21c7e0b02073",
        "created_date": "2020-05-12T17:30:16.801156+00:00",
        "modified_date": "2020-05-12T17:30:16.801156+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.521428+00:00",
        "etl_stage_id": "eeec22ce-cba9-4cc2-8ed7-21c7e0b02073",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "987fda31-a4b2-4fec-8729-2cbe40bff953",
        "created_date": "2020-05-12T17:30:16.774265+00:00",
        "modified_date": "2020-05-12T17:30:16.774265+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.506476+00:00",
        "etl_stage_id": "987fda31-a4b2-4fec-8729-2cbe40bff953",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F700FZAZDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c5d027de-f4e5-4ac3-bd64-5933e9fd585a",
        "created_date": "2020-05-12T17:30:16.771954+00:00",
        "modified_date": "2020-05-12T17:30:16.771954+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.491963+00:00",
        "etl_stage_id": "c5d027de-f4e5-4ac3-bd64-5933e9fd585a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474-53-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "69330ff8-3fce-4ba6-9890-7607e7fc7326",
        "created_date": "2020-05-12T17:31:12.018776+00:00",
        "modified_date": "2020-05-12T17:31:12.018776+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.979576+00:00",
        "etl_stage_id": "69330ff8-3fce-4ba6-9890-7607e7fc7326",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "259c2569-b484-40a2-b78e-33aa378ee336",
        "created_date": "2020-05-12T17:31:11.523971+00:00",
        "modified_date": "2020-05-12T17:31:11.523971+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.975507+00:00",
        "etl_stage_id": "259c2569-b484-40a2-b78e-33aa378ee336",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775-138-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "14632359-b182-4bd6-94bf-c8109274f528",
        "created_date": "2020-05-12T17:31:11.458096+00:00",
        "modified_date": "2020-05-12T17:31:11.458096+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.960457+00:00",
        "etl_stage_id": "14632359-b182-4bd6-94bf-c8109274f528",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473-51-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5fefd67d-1c0f-4cb3-8429-de72455f75d3",
        "created_date": "2020-05-12T17:31:10.848006+00:00",
        "modified_date": "2020-05-12T17:31:10.848006+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.938199+00:00",
        "etl_stage_id": "5fefd67d-1c0f-4cb3-8429-de72455f75d3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f8b5bfb5-522b-4725-963a-3057500bd864",
        "created_date": "2020-05-12T17:31:10.747616+00:00",
        "modified_date": "2020-05-12T17:31:10.747616+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.915821+00:00",
        "etl_stage_id": "f8b5bfb5-522b-4725-963a-3057500bd864",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773-136-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8886284e-9009-40e9-bbda-e8c3a7b94f64",
        "created_date": "2020-05-12T17:31:10.321394+00:00",
        "modified_date": "2020-05-12T17:31:10.321394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.892932+00:00",
        "etl_stage_id": "8886284e-9009-40e9-bbda-e8c3a7b94f64",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a9c52a14-b7e2-4562-be5b-0b7d93ebac35",
        "created_date": "2020-05-12T17:31:10.149863+00:00",
        "modified_date": "2020-05-12T17:31:10.149863+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.869051+00:00",
        "etl_stage_id": "a9c52a14-b7e2-4562-be5b-0b7d93ebac35",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472-52-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "29fcab06-5934-4cc1-9b37-ea89b28e444f",
        "created_date": "2020-05-12T17:31:09.779713+00:00",
        "modified_date": "2020-05-12T17:31:09.779713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.858070+00:00",
        "etl_stage_id": "29fcab06-5934-4cc1-9b37-ea89b28e444f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "111d6505-7dc8-48d1-b7c0-f72216f99dbf",
        "created_date": "2020-05-12T17:31:09.649164+00:00",
        "modified_date": "2020-05-12T17:31:09.649164+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.844506+00:00",
        "etl_stage_id": "111d6505-7dc8-48d1-b7c0-f72216f99dbf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e6097563-518c-45a9-bf79-81f7f80cf2a9",
        "created_date": "2020-05-12T17:31:09.409653+00:00",
        "modified_date": "2020-05-12T17:31:09.409653+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.822873+00:00",
        "etl_stage_id": "e6097563-518c-45a9-bf79-81f7f80cf2a9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-237-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "24ce3ea4-03cd-46a0-8c2b-374829da1b65",
        "created_date": "2020-05-12T17:31:09.215713+00:00",
        "modified_date": "2020-05-12T17:31:09.215713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.810478+00:00",
        "etl_stage_id": "24ce3ea4-03cd-46a0-8c2b-374829da1b65",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471-58-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d1cea431-a6ec-4692-8ff9-4f5360b6479b",
        "created_date": "2020-05-12T17:31:08.626956+00:00",
        "modified_date": "2020-05-12T17:31:08.626956+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.798177+00:00",
        "etl_stage_id": "d1cea431-a6ec-4692-8ff9-4f5360b6479b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-163-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bc94ded3-a158-43e6-b30f-bca05c830474",
        "created_date": "2020-05-12T17:31:08.322568+00:00",
        "modified_date": "2020-05-12T17:31:08.322568+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.777377+00:00",
        "etl_stage_id": "bc94ded3-a158-43e6-b30f-bca05c830474",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "209bf7de-2563-4507-a763-4c32aecb561c",
        "created_date": "2020-05-12T17:31:08.140562+00:00",
        "modified_date": "2020-05-12T17:31:08.140562+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.752420+00:00",
        "etl_stage_id": "209bf7de-2563-4507-a763-4c32aecb561c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0cd5710b-c80b-4808-845e-73c1226291a6",
        "created_date": "2020-05-12T17:31:08.102175+00:00",
        "modified_date": "2020-05-12T17:31:08.102175+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.730752+00:00",
        "etl_stage_id": "0cd5710b-c80b-4808-845e-73c1226291a6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2007",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "44faf0ea-8188-4c77-aeba-f1c31302834a",
        "created_date": "2020-05-12T17:31:07.894394+00:00",
        "modified_date": "2020-05-12T17:31:07.894394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.718622+00:00",
        "etl_stage_id": "44faf0ea-8188-4c77-aeba-f1c31302834a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2972bbd7-8423-4133-b950-4d476b627552",
        "created_date": "2020-05-12T17:31:07.784330+00:00",
        "modified_date": "2020-05-12T17:31:07.784330+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.706457+00:00",
        "etl_stage_id": "2972bbd7-8423-4133-b950-4d476b627552",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470-55-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "719f8829-8218-4bcb-8b0c-d0d6ba21eeab",
        "created_date": "2020-05-12T17:31:07.499125+00:00",
        "modified_date": "2020-05-12T17:31:07.499125+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.695023+00:00",
        "etl_stage_id": "719f8829-8218-4bcb-8b0c-d0d6ba21eeab",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2006",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1445cc74-ac2a-4924-a095-2155671e9333",
        "created_date": "2020-05-12T17:31:07.475809+00:00",
        "modified_date": "2020-05-12T17:31:07.475809+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.681412+00:00",
        "etl_stage_id": "1445cc74-ac2a-4924-a095-2155671e9333",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-242-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "01959465-d81f-4796-bfd4-72f5004ca0a1",
        "created_date": "2020-05-12T17:31:07.202652+00:00",
        "modified_date": "2020-05-12T17:31:07.202652+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.659883+00:00",
        "etl_stage_id": "01959465-d81f-4796-bfd4-72f5004ca0a1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ac97bd50-5e7f-4289-82de-787abc23ed3f",
        "created_date": "2020-05-12T17:31:07.052037+00:00",
        "modified_date": "2020-05-12T17:31:07.052037+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.647028+00:00",
        "etl_stage_id": "ac97bd50-5e7f-4289-82de-787abc23ed3f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-161-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "04d13392-55c8-4510-8f32-c63a7f3b6b96",
        "created_date": "2020-05-12T17:31:06.655325+00:00",
        "modified_date": "2020-05-12T17:31:06.655325+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.634829+00:00",
        "etl_stage_id": "04d13392-55c8-4510-8f32-c63a7f3b6b96",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2005",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7e9ca26e-2d62-41ed-8ad9-4a390b4e5ade",
        "created_date": "2020-05-12T17:31:06.575659+00:00",
        "modified_date": "2020-05-12T17:31:06.575659+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.621383+00:00",
        "etl_stage_id": "7e9ca26e-2d62-41ed-8ad9-4a390b4e5ade",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469-57-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "05c1ef0b-8685-46e8-8d5f-65202eed668f",
        "created_date": "2020-05-12T17:31:06.486170+00:00",
        "modified_date": "2020-05-12T17:31:06.486170+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.599518+00:00",
        "etl_stage_id": "05c1ef0b-8685-46e8-8d5f-65202eed668f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "91943db0-35f6-4831-8461-c437485dedef",
        "created_date": "2020-05-12T17:31:06.167498+00:00",
        "modified_date": "2020-05-12T17:31:06.167498+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.586623+00:00",
        "etl_stage_id": "91943db0-35f6-4831-8461-c437485dedef",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "21e526cb-be29-4dbb-9960-e7dece4dff86",
        "created_date": "2020-05-12T17:31:05.990122+00:00",
        "modified_date": "2020-05-12T17:31:05.990122+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.567079+00:00",
        "etl_stage_id": "21e526cb-be29-4dbb-9960-e7dece4dff86",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2004",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "88f10ccc-7f1f-45d6-9c7e-a27e7bcf8bb5",
        "created_date": "2020-05-12T17:31:05.946870+00:00",
        "modified_date": "2020-05-12T17:31:05.946870+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.556736+00:00",
        "etl_stage_id": "88f10ccc-7f1f-45d6-9c7e-a27e7bcf8bb5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304-217-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7646283e-4ccd-4e38-ac2c-86fdca077c9e",
        "created_date": "2020-05-12T17:31:05.856646+00:00",
        "modified_date": "2020-05-12T17:31:05.856646+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.547248+00:00",
        "etl_stage_id": "7646283e-4ccd-4e38-ac2c-86fdca077c9e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761-153-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "76737c3d-8d30-4382-be0f-2460d5d9e48f",
        "created_date": "2020-05-12T17:31:05.536677+00:00",
        "modified_date": "2020-05-12T17:31:05.536677+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.527078+00:00",
        "etl_stage_id": "76737c3d-8d30-4382-be0f-2460d5d9e48f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2003",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "09809fbf-165c-4b3c-bebf-9155778c561b",
        "created_date": "2020-05-12T17:31:05.463603+00:00",
        "modified_date": "2020-05-12T17:31:05.463603+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.515532+00:00",
        "etl_stage_id": "09809fbf-165c-4b3c-bebf-9155778c561b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "40c92065-5379-4da9-9180-45b29b90f646",
        "created_date": "2020-05-12T17:31:05.354095+00:00",
        "modified_date": "2020-05-12T17:31:05.354095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.504072+00:00",
        "etl_stage_id": "40c92065-5379-4da9-9180-45b29b90f646",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2002",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "698abb8f-005f-4d04-ac5e-b5eb36b5ba66",
        "created_date": "2020-05-12T17:31:04.932282+00:00",
        "modified_date": "2020-05-12T17:31:04.932282+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.492001+00:00",
        "etl_stage_id": "698abb8f-005f-4d04-ac5e-b5eb36b5ba66",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1132",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "95ddf352-07a4-488e-9333-593722eba2a2",
        "created_date": "2020-05-12T17:31:04.855004+00:00",
        "modified_date": "2020-05-12T17:31:04.855004+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.479908+00:00",
        "etl_stage_id": "95ddf352-07a4-488e-9333-593722eba2a2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ab4e9e98-5a96-4d1c-ac82-381b2130b1cd",
        "created_date": "2020-05-12T17:31:04.461154+00:00",
        "modified_date": "2020-05-12T17:31:04.461154+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.458810+00:00",
        "etl_stage_id": "ab4e9e98-5a96-4d1c-ac82-381b2130b1cd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3854fd77-890e-4d61-88ef-e8b19b47f2d5",
        "created_date": "2020-05-12T17:31:04.323227+00:00",
        "modified_date": "2020-05-12T17:31:04.323227+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.433826+00:00",
        "etl_stage_id": "3854fd77-890e-4d61-88ef-e8b19b47f2d5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-2022",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "11af44a7-f533-4a0f-bcfa-981dc2b5ee79",
        "created_date": "2020-05-12T17:31:04.295608+00:00",
        "modified_date": "2020-05-12T17:31:04.295608+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.423053+00:00",
        "etl_stage_id": "11af44a7-f533-4a0f-bcfa-981dc2b5ee79",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303-216-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6424bc43-0e80-4d50-a6fa-0e9370b4bf6e",
        "created_date": "2020-05-12T17:31:04.101588+00:00",
        "modified_date": "2020-05-12T17:31:04.101588+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.410831+00:00",
        "etl_stage_id": "6424bc43-0e80-4d50-a6fa-0e9370b4bf6e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9f75c382-1ec6-4921-a5db-699114680e83",
        "created_date": "2020-05-12T17:31:03.769403+00:00",
        "modified_date": "2020-05-12T17:31:03.769403+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.389153+00:00",
        "etl_stage_id": "9f75c382-1ec6-4921-a5db-699114680e83",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1993",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0f0f1281-0db9-4b06-a4b5-fb393cde25f3",
        "created_date": "2020-05-12T17:31:03.690072+00:00",
        "modified_date": "2020-05-12T17:31:03.690072+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.376128+00:00",
        "etl_stage_id": "0f0f1281-0db9-4b06-a4b5-fb393cde25f3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9fdc6398-2259-40de-ae2c-cbcef99c1dee",
        "created_date": "2020-05-12T17:31:03.399880+00:00",
        "modified_date": "2020-05-12T17:31:03.399880+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.351544+00:00",
        "etl_stage_id": "9fdc6398-2259-40de-ae2c-cbcef99c1dee",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c85783f3-26b6-4c67-b49c-0e4dc02fbc41",
        "created_date": "2020-05-12T17:31:03.227418+00:00",
        "modified_date": "2020-05-12T17:31:03.227418+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.348741+00:00",
        "etl_stage_id": "c85783f3-26b6-4c67-b49c-0e4dc02fbc41",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759-151-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b3c4ac29-33d0-4049-819b-cbabf31f1056",
        "created_date": "2020-05-12T17:31:03.219861+00:00",
        "modified_date": "2020-05-12T17:31:03.219861+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.334141+00:00",
        "etl_stage_id": "b3c4ac29-33d0-4049-819b-cbabf31f1056",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1992",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f0e69d81-7ed5-49a7-bd31-f75fde1d4bed",
        "created_date": "2020-05-12T17:31:02.984007+00:00",
        "modified_date": "2020-05-12T17:31:02.984007+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.307558+00:00",
        "etl_stage_id": "f0e69d81-7ed5-49a7-bd31-f75fde1d4bed",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "226c0319-1788-47b4-aa89-a95f8b7d9e07",
        "created_date": "2020-05-12T17:31:02.607132+00:00",
        "modified_date": "2020-05-12T17:31:02.607132+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.298732+00:00",
        "etl_stage_id": "226c0319-1788-47b4-aa89-a95f8b7d9e07",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "196b7694-bdac-4c71-986b-6957ed8274c4",
        "created_date": "2020-05-12T17:31:02.449279+00:00",
        "modified_date": "2020-05-12T17:31:02.449279+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.289785+00:00",
        "etl_stage_id": "196b7694-bdac-4c71-986b-6957ed8274c4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302-215-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "13b3058d-95a6-4944-8c55-67adee84ade6",
        "created_date": "2020-05-12T17:31:02.314591+00:00",
        "modified_date": "2020-05-12T17:31:02.314591+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.271830+00:00",
        "etl_stage_id": "13b3058d-95a6-4944-8c55-67adee84ade6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757-149-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "311c4dd5-a372-462a-a09b-cc55e29ac83e",
        "created_date": "2020-05-12T17:31:01.943047+00:00",
        "modified_date": "2020-05-12T17:31:01.943047+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.251622+00:00",
        "etl_stage_id": "311c4dd5-a372-462a-a09b-cc55e29ac83e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bdfd48f1-5fd7-4b07-9bd5-e93457a102d7",
        "created_date": "2020-05-12T17:31:01.895910+00:00",
        "modified_date": "2020-05-12T17:31:01.895910+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.231933+00:00",
        "etl_stage_id": "bdfd48f1-5fd7-4b07-9bd5-e93457a102d7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1991",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "78c44091-13b0-437c-9353-1606dc21ae03",
        "created_date": "2020-05-12T17:31:01.820002+00:00",
        "modified_date": "2020-05-12T17:31:01.820002+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.224558+00:00",
        "etl_stage_id": "78c44091-13b0-437c-9353-1606dc21ae03",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0f65d120-1ad7-4e1c-8785-e8dd836149a8",
        "created_date": "2020-05-12T17:31:01.777512+00:00",
        "modified_date": "2020-05-12T17:31:01.777512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.204257+00:00",
        "etl_stage_id": "0f65d120-1ad7-4e1c-8785-e8dd836149a8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7fbf6082-e1c2-4eff-86a4-687ec3bf02d2",
        "created_date": "2020-05-12T17:31:01.455804+00:00",
        "modified_date": "2020-05-12T17:31:01.455804+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.192737+00:00",
        "etl_stage_id": "7fbf6082-e1c2-4eff-86a4-687ec3bf02d2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1816",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "22162fdd-6b94-422f-853c-b8b13d9616cf",
        "created_date": "2020-05-12T17:31:01.405984+00:00",
        "modified_date": "2020-05-12T17:31:01.405984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.180721+00:00",
        "etl_stage_id": "22162fdd-6b94-422f-853c-b8b13d9616cf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301-210-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fb3b8508-dd45-4c6b-8112-daa27a0a3e9a",
        "created_date": "2020-05-12T17:31:01.228531+00:00",
        "modified_date": "2020-05-12T17:31:01.228531+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.169301+00:00",
        "etl_stage_id": "fb3b8508-dd45-4c6b-8112-daa27a0a3e9a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755-169-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9bdc76ff-21f4-4447-aac6-9a6aab1757d2",
        "created_date": "2020-05-12T17:31:00.875271+00:00",
        "modified_date": "2020-05-12T17:31:00.875271+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.156330+00:00",
        "etl_stage_id": "9bdc76ff-21f4-4447-aac6-9a6aab1757d2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ffae158c-9783-414b-bd26-4f971c56766e",
        "created_date": "2020-05-12T17:31:00.838595+00:00",
        "modified_date": "2020-05-12T17:31:00.838595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.135503+00:00",
        "etl_stage_id": "ffae158c-9783-414b-bd26-4f971c56766e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1731",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a1f0134b-582c-4d4a-9559-250d8473fd19",
        "created_date": "2020-05-12T17:31:00.804524+00:00",
        "modified_date": "2020-05-12T17:31:00.804524+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.123882+00:00",
        "etl_stage_id": "a1f0134b-582c-4d4a-9559-250d8473fd19",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7bde9c3c-440a-4412-b63f-d3688237eba2",
        "created_date": "2020-05-12T17:31:00.655357+00:00",
        "modified_date": "2020-05-12T17:31:00.655357+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.109664+00:00",
        "etl_stage_id": "7bde9c3c-440a-4412-b63f-d3688237eba2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300-214-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5b2360f6-dc28-4ab2-b59c-f990b6b6a65e",
        "created_date": "2020-05-12T17:30:59.819237+00:00",
        "modified_date": "2020-05-12T17:30:59.819237+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.098984+00:00",
        "etl_stage_id": "5b2360f6-dc28-4ab2-b59c-f990b6b6a65e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "56e705ab-2414-4f40-891e-bf13a9d627c4",
        "created_date": "2020-05-12T17:30:59.754228+00:00",
        "modified_date": "2020-05-12T17:30:59.754228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.083088+00:00",
        "etl_stage_id": "56e705ab-2414-4f40-891e-bf13a9d627c4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f68b751f-31f0-4b3b-8898-ef422f2c5ce1",
        "created_date": "2020-05-12T17:30:59.682226+00:00",
        "modified_date": "2020-05-12T17:30:59.682226+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.062803+00:00",
        "etl_stage_id": "f68b751f-31f0-4b3b-8898-ef422f2c5ce1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1730",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f2e32c5b-3f16-485d-9aa2-b6b70e2c5a7f",
        "created_date": "2020-05-12T17:30:59.642373+00:00",
        "modified_date": "2020-05-12T17:30:59.642373+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.040184+00:00",
        "etl_stage_id": "f2e32c5b-3f16-485d-9aa2-b6b70e2c5a7f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7a334bf8-409b-4aed-8596-13d50d192aee",
        "created_date": "2020-05-12T17:30:59.218258+00:00",
        "modified_date": "2020-05-12T17:30:59.218258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.014949+00:00",
        "etl_stage_id": "7a334bf8-409b-4aed-8596-13d50d192aee",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "52620001-a227-4694-8578-4a96d19da8fc",
        "created_date": "2020-05-12T17:30:59.111144+00:00",
        "modified_date": "2020-05-12T17:30:59.111144+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.003552+00:00",
        "etl_stage_id": "52620001-a227-4694-8578-4a96d19da8fc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1729",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "09aef13e-1306-4433-ad0e-649bd61e142e",
        "created_date": "2020-05-12T17:30:59.106361+00:00",
        "modified_date": "2020-05-12T17:30:59.106361+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.991767+00:00",
        "etl_stage_id": "09aef13e-1306-4433-ad0e-649bd61e142e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753-167-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "612d3aa7-e036-4400-ab44-58b94482b7a5",
        "created_date": "2020-05-12T17:30:59.077129+00:00",
        "modified_date": "2020-05-12T17:30:59.077129+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.979460+00:00",
        "etl_stage_id": "612d3aa7-e036-4400-ab44-58b94482b7a5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299-212-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fef78625-52f1-4fd9-9e7c-a871bd114331",
        "created_date": "2020-05-12T17:30:58.711402+00:00",
        "modified_date": "2020-05-12T17:30:58.711402+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.967413+00:00",
        "etl_stage_id": "fef78625-52f1-4fd9-9e7c-a871bd114331",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3ced382c-b30c-4fe4-936b-61ed44aa5a41",
        "created_date": "2020-05-12T17:30:58.568611+00:00",
        "modified_date": "2020-05-12T17:30:58.568611+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.954492+00:00",
        "etl_stage_id": "3ced382c-b30c-4fe4-936b-61ed44aa5a41",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1728",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2c97ce95-2789-4f4f-8d77-6d38818a7eaf",
        "created_date": "2020-05-12T17:30:58.211995+00:00",
        "modified_date": "2020-05-12T17:30:58.211995+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.942039+00:00",
        "etl_stage_id": "2c97ce95-2789-4f4f-8d77-6d38818a7eaf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d57d71cd-e71c-45f1-857c-a908182a5afc",
        "created_date": "2020-05-12T17:30:58.155118+00:00",
        "modified_date": "2020-05-12T17:30:58.155118+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.933327+00:00",
        "etl_stage_id": "d57d71cd-e71c-45f1-857c-a908182a5afc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-260-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d12bd275-1f44-4892-b283-f75a02b3e6ca",
        "created_date": "2020-05-12T17:30:57.771165+00:00",
        "modified_date": "2020-05-12T17:30:57.771165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.918537+00:00",
        "etl_stage_id": "d12bd275-1f44-4892-b283-f75a02b3e6ca",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e8250562-f312-4e54-ae27-8f20e8698305",
        "created_date": "2020-05-12T17:30:57.690058+00:00",
        "modified_date": "2020-05-12T17:30:57.690058+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.881257+00:00",
        "etl_stage_id": "e8250562-f312-4e54-ae27-8f20e8698305",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297-213-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "da2cda2d-3ca6-4e68-b8cc-bb4fe9be0f7f",
        "created_date": "2020-05-12T17:30:57.650228+00:00",
        "modified_date": "2020-05-12T17:30:57.650228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.877613+00:00",
        "etl_stage_id": "da2cda2d-3ca6-4e68-b8cc-bb4fe9be0f7f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2294",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e53ae0a8-c00f-4cce-bb73-cefaaac1f184",
        "created_date": "2020-05-12T17:30:57.621698+00:00",
        "modified_date": "2020-05-12T17:30:57.621698+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.865457+00:00",
        "etl_stage_id": "e53ae0a8-c00f-4cce-bb73-cefaaac1f184",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1d14be32-2481-43d9-9d78-472c9423ccdb",
        "created_date": "2020-05-12T17:30:57.031984+00:00",
        "modified_date": "2020-05-12T17:30:57.031984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.853239+00:00",
        "etl_stage_id": "1d14be32-2481-43d9-9d78-472c9423ccdb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2291",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "043ca512-ae12-4f85-a214-457f39bf7765",
        "created_date": "2020-05-12T17:30:57.024515+00:00",
        "modified_date": "2020-05-12T17:30:57.024515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.841088+00:00",
        "etl_stage_id": "043ca512-ae12-4f85-a214-457f39bf7765",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6db61832-4a58-40f5-b2f3-7486b3101ce7",
        "created_date": "2020-05-12T17:30:56.887752+00:00",
        "modified_date": "2020-05-12T17:30:56.887752+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.829589+00:00",
        "etl_stage_id": "6db61832-4a58-40f5-b2f3-7486b3101ce7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751-165-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "749a04e1-b119-4741-90d2-ec731a31c560",
        "created_date": "2020-05-12T17:30:56.329083+00:00",
        "modified_date": "2020-05-12T17:30:56.329083+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.815556+00:00",
        "etl_stage_id": "749a04e1-b119-4741-90d2-ec731a31c560",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296-211-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "afd3e97a-7a45-447d-9dae-958b6af39d61",
        "created_date": "2020-05-12T17:30:56.294400+00:00",
        "modified_date": "2020-05-12T17:30:56.294400+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.788014+00:00",
        "etl_stage_id": "afd3e97a-7a45-447d-9dae-958b6af39d61",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "05edd347-d850-4710-bd6e-d05d4f007410",
        "created_date": "2020-05-12T17:30:56.293841+00:00",
        "modified_date": "2020-05-12T17:30:56.293841+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.781350+00:00",
        "etl_stage_id": "05edd347-d850-4710-bd6e-d05d4f007410",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2268",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "803f7fa1-3f88-41e0-8557-3d45260d186a",
        "created_date": "2020-05-12T17:30:55.829709+00:00",
        "modified_date": "2020-05-12T17:30:55.829709+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.769932+00:00",
        "etl_stage_id": "803f7fa1-3f88-41e0-8557-3d45260d186a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ada612a5-e371-45b8-b916-7a3d79990c9f",
        "created_date": "2020-05-12T17:30:55.667592+00:00",
        "modified_date": "2020-05-12T17:30:55.667592+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.754311+00:00",
        "etl_stage_id": "ada612a5-e371-45b8-b916-7a3d79990c9f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "04252c5a-e8c5-408e-bfdf-52239f02efc4",
        "created_date": "2020-05-12T17:30:55.632116+00:00",
        "modified_date": "2020-05-12T17:30:55.632116+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.742199+00:00",
        "etl_stage_id": "04252c5a-e8c5-408e-bfdf-52239f02efc4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970-206-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e53100d7-aa67-4fd5-a06d-886ecd75c532",
        "created_date": "2020-05-12T17:30:54.922090+00:00",
        "modified_date": "2020-05-12T17:30:54.922090+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.730063+00:00",
        "etl_stage_id": "e53100d7-aa67-4fd5-a06d-886ecd75c532",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "adae33f7-fd8b-4764-951d-5ee225cad890",
        "created_date": "2020-05-12T17:30:54.821579+00:00",
        "modified_date": "2020-05-12T17:30:54.821579+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.713908+00:00",
        "etl_stage_id": "adae33f7-fd8b-4764-951d-5ee225cad890",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d0d48bd9-f792-4ab7-873c-d290a3c83218",
        "created_date": "2020-05-12T17:30:54.800103+00:00",
        "modified_date": "2020-05-12T17:30:54.800103+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.703103+00:00",
        "etl_stage_id": "d0d48bd9-f792-4ab7-873c-d290a3c83218",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1870",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7bed7359-b826-4380-89db-89daa5c94b2e",
        "created_date": "2020-05-12T17:30:54.345139+00:00",
        "modified_date": "2020-05-12T17:30:54.345139+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.682904+00:00",
        "etl_stage_id": "7bed7359-b826-4380-89db-89daa5c94b2e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1915",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "77038742-0600-45b1-bc38-78ca8a911c9f",
        "created_date": "2020-05-12T17:30:54.067689+00:00",
        "modified_date": "2020-05-12T17:30:54.067689+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.660176+00:00",
        "etl_stage_id": "77038742-0600-45b1-bc38-78ca8a911c9f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "22f26fd9-d84f-49db-9aae-20f18d5b33e2",
        "created_date": "2020-05-12T17:30:53.962570+00:00",
        "modified_date": "2020-05-12T17:30:53.962570+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.648108+00:00",
        "etl_stage_id": "22f26fd9-d84f-49db-9aae-20f18d5b33e2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1970",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7be79464-5f42-4a80-8271-3671e914c9bf",
        "created_date": "2020-05-12T17:30:53.655455+00:00",
        "modified_date": "2020-05-12T17:30:53.655455+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.635997+00:00",
        "etl_stage_id": "7be79464-5f42-4a80-8271-3671e914c9bf",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1869",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c703ec2e-1940-4c82-b038-dc636700ae24",
        "created_date": "2020-05-12T17:30:53.612958+00:00",
        "modified_date": "2020-05-12T17:30:53.612958+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.615163+00:00",
        "etl_stage_id": "c703ec2e-1940-4c82-b038-dc636700ae24",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9827f411-0e1c-44d5-bacc-04cddbd85233",
        "created_date": "2020-05-12T17:30:53.272614+00:00",
        "modified_date": "2020-05-12T17:30:53.272614+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.601023+00:00",
        "etl_stage_id": "9827f411-0e1c-44d5-bacc-04cddbd85233",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3360deeb-ca6d-424f-827f-1195b23714da",
        "created_date": "2020-05-12T17:30:53.093504+00:00",
        "modified_date": "2020-05-12T17:30:53.093504+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.589620+00:00",
        "etl_stage_id": "3360deeb-ca6d-424f-827f-1195b23714da",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1868",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "48dcd569-b141-441a-b9a4-9a2df90b8eff",
        "created_date": "2020-05-12T17:30:52.677108+00:00",
        "modified_date": "2020-05-12T17:30:52.677108+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.571689+00:00",
        "etl_stage_id": "48dcd569-b141-441a-b9a4-9a2df90b8eff",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1646",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "32a6b4d9-7559-4f17-875b-a7138fef63d8",
        "created_date": "2020-05-12T17:30:52.425948+00:00",
        "modified_date": "2020-05-12T17:30:52.425948+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.560156+00:00",
        "etl_stage_id": "32a6b4d9-7559-4f17-875b-a7138fef63d8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "65027068-725b-4d65-8dcb-ea018ab91767",
        "created_date": "2020-05-12T17:30:52.408145+00:00",
        "modified_date": "2020-05-12T17:30:52.408145+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.521883+00:00",
        "etl_stage_id": "65027068-725b-4d65-8dcb-ea018ab91767",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969-205-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f2441474-f47e-4218-9675-0340310eb8c9",
        "created_date": "2020-05-12T17:30:52.408731+00:00",
        "modified_date": "2020-05-12T17:30:52.408731+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.543263+00:00",
        "etl_stage_id": "f2441474-f47e-4218-9675-0340310eb8c9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645-243-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "be52d3e8-4885-4be9-9f3a-5993c248fc73",
        "created_date": "2020-05-12T17:30:51.562011+00:00",
        "modified_date": "2020-05-12T17:30:51.562011+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.513542+00:00",
        "etl_stage_id": "be52d3e8-4885-4be9-9f3a-5993c248fc73",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1969",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "74699d75-5910-461e-8793-79dafc97d988",
        "created_date": "2020-05-12T17:30:51.551393+00:00",
        "modified_date": "2020-05-12T17:30:51.551393+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.497492+00:00",
        "etl_stage_id": "74699d75-5910-461e-8793-79dafc97d988",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1913",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9f7dc260-37a6-477b-8a54-dfbab0fc2327",
        "created_date": "2020-05-12T17:30:51.389808+00:00",
        "modified_date": "2020-05-12T17:30:51.389808+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.484466+00:00",
        "etl_stage_id": "9f7dc260-37a6-477b-8a54-dfbab0fc2327",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1867",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "77ab077e-34b6-4bf3-90af-562d49cdecfb",
        "created_date": "2020-05-12T17:30:51.281796+00:00",
        "modified_date": "2020-05-12T17:30:51.281796+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.471413+00:00",
        "etl_stage_id": "77ab077e-34b6-4bf3-90af-562d49cdecfb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1645",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6d2dc74e-4bb3-4326-ade6-6a7075ca6ab3",
        "created_date": "2020-05-12T17:30:50.768727+00:00",
        "modified_date": "2020-05-12T17:30:50.768727+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.448230+00:00",
        "etl_stage_id": "6d2dc74e-4bb3-4326-ade6-6a7075ca6ab3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968-204-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "98fc39ae-3b1f-4d1f-9317-850ad6e17444",
        "created_date": "2020-05-12T17:30:50.677272+00:00",
        "modified_date": "2020-05-12T17:30:50.677272+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.435068+00:00",
        "etl_stage_id": "98fc39ae-3b1f-4d1f-9317-850ad6e17444",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1866",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b946f988-2b71-4167-accd-c17e855da950",
        "created_date": "2020-05-12T17:30:49.598777+00:00",
        "modified_date": "2020-05-12T17:30:49.598777+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.423162+00:00",
        "etl_stage_id": "b946f988-2b71-4167-accd-c17e855da950",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1911",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4ee986cd-d120-4474-a740-e3dd490543de",
        "created_date": "2020-05-12T17:30:49.597764+00:00",
        "modified_date": "2020-05-12T17:30:49.597764+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.384193+00:00",
        "etl_stage_id": "4ee986cd-d120-4474-a740-e3dd490543de",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "248efedd-9d06-4156-8435-a5e68be6ed3f",
        "created_date": "2020-05-12T17:30:49.202943+00:00",
        "modified_date": "2020-05-12T17:30:49.202943+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.372724+00:00",
        "etl_stage_id": "248efedd-9d06-4156-8435-a5e68be6ed3f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1968",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d60b5496-5ed0-4cbb-bce7-28f0fa522b4c",
        "created_date": "2020-05-12T17:30:48.902846+00:00",
        "modified_date": "2020-05-12T17:30:48.902846+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.359699+00:00",
        "etl_stage_id": "d60b5496-5ed0-4cbb-bce7-28f0fa522b4c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907-244-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d27a2204-d414-438e-b66b-ff0075e97a7a",
        "created_date": "2020-05-12T17:30:48.648950+00:00",
        "modified_date": "2020-05-12T17:30:48.648950+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.336666+00:00",
        "etl_stage_id": "d27a2204-d414-438e-b66b-ff0075e97a7a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1883",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0d29acb3-f269-4964-840e-f1e763c72ee7",
        "created_date": "2020-05-12T17:30:48.267874+00:00",
        "modified_date": "2020-05-12T17:30:48.267874+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.324575+00:00",
        "etl_stage_id": "0d29acb3-f269-4964-840e-f1e763c72ee7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7112fb06-d7bf-4c35-aed5-6251123a78b3",
        "created_date": "2020-05-12T17:30:48.119896+00:00",
        "modified_date": "2020-05-12T17:30:48.119896+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.300148+00:00",
        "etl_stage_id": "7112fb06-d7bf-4c35-aed5-6251123a78b3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966-202-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c9414a76-008b-4cc7-bc7e-60121262df85",
        "created_date": "2020-05-12T17:30:48.030068+00:00",
        "modified_date": "2020-05-12T17:30:48.030068+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.292909+00:00",
        "etl_stage_id": "c9414a76-008b-4cc7-bc7e-60121262df85",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1907",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ee901580-438c-4783-93ec-1d319463dbfd",
        "created_date": "2020-05-12T17:30:47.728955+00:00",
        "modified_date": "2020-05-12T17:30:47.728955+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.279177+00:00",
        "etl_stage_id": "ee901580-438c-4783-93ec-1d319463dbfd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1865",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2c867c39-f202-48d0-8d27-799d4358ac69",
        "created_date": "2020-05-12T17:30:47.602762+00:00",
        "modified_date": "2020-05-12T17:30:47.602762+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.265926+00:00",
        "etl_stage_id": "2c867c39-f202-48d0-8d27-799d4358ac69",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1966",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d8d58fd2-71df-4b79-b903-f2aa689ff6fa",
        "created_date": "2020-05-12T17:30:47.210656+00:00",
        "modified_date": "2020-05-12T17:30:47.210656+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.243397+00:00",
        "etl_stage_id": "d8d58fd2-71df-4b79-b903-f2aa689ff6fa",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1549",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "25717bf3-2e87-404a-8460-b64b00f03e6a",
        "created_date": "2020-05-12T17:30:46.979651+00:00",
        "modified_date": "2020-05-12T17:30:46.979651+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.231011+00:00",
        "etl_stage_id": "25717bf3-2e87-404a-8460-b64b00f03e6a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1903",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1c3ed91f-6a91-4cb0-83c5-85796cef0a00",
        "created_date": "2020-05-12T17:30:46.917815+00:00",
        "modified_date": "2020-05-12T17:30:46.917815+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.218941+00:00",
        "etl_stage_id": "1c3ed91f-6a91-4cb0-83c5-85796cef0a00",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "08690afb-ab0c-4087-b288-5c0d55d3823f",
        "created_date": "2020-05-12T17:30:46.230131+00:00",
        "modified_date": "2020-05-12T17:30:46.230131+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.205479+00:00",
        "etl_stage_id": "08690afb-ab0c-4087-b288-5c0d55d3823f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1902",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b77499d7-b278-41c8-8d96-262e096ce3bb",
        "created_date": "2020-05-12T17:30:46.169165+00:00",
        "modified_date": "2020-05-12T17:30:46.169165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.188840+00:00",
        "etl_stage_id": "b77499d7-b278-41c8-8d96-262e096ce3bb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1864",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e96cc641-8302-4f81-8ab3-f504a5a6fc50",
        "created_date": "2020-05-12T17:30:45.431569+00:00",
        "modified_date": "2020-05-12T17:30:45.431569+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.170754+00:00",
        "etl_stage_id": "e96cc641-8302-4f81-8ab3-f504a5a6fc50",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965-201-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "35882897-8db8-49c2-a5ce-f090d31781c7",
        "created_date": "2020-05-12T17:30:45.386371+00:00",
        "modified_date": "2020-05-12T17:30:45.386371+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.149943+00:00",
        "etl_stage_id": "35882897-8db8-49c2-a5ce-f090d31781c7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "120a4b2d-2eea-46d8-82f0-1ed6c94e6726",
        "created_date": "2020-05-12T17:30:45.128872+00:00",
        "modified_date": "2020-05-12T17:30:45.128872+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.129197+00:00",
        "etl_stage_id": "120a4b2d-2eea-46d8-82f0-1ed6c94e6726",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-248-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e4a2ca45-a5d0-4d56-8909-5dbd0adc7a30",
        "created_date": "2020-05-12T17:30:45.127952+00:00",
        "modified_date": "2020-05-12T17:30:45.127952+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.103936+00:00",
        "etl_stage_id": "e4a2ca45-a5d0-4d56-8909-5dbd0adc7a30",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1901",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "814de0dd-dcd8-4cfa-89da-21e177382239",
        "created_date": "2020-05-12T17:30:44.936515+00:00",
        "modified_date": "2020-05-12T17:30:44.936515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.096706+00:00",
        "etl_stage_id": "814de0dd-dcd8-4cfa-89da-21e177382239",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ebf13ae2-0550-415b-8f54-4257bff42b3e",
        "created_date": "2020-05-12T17:30:43.995926+00:00",
        "modified_date": "2020-05-12T17:30:43.995926+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.076374+00:00",
        "etl_stage_id": "ebf13ae2-0550-415b-8f54-4257bff42b3e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2287",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9a44aeb9-b569-4a38-b6db-e06d4fee9f41",
        "created_date": "2020-05-12T17:30:43.961258+00:00",
        "modified_date": "2020-05-12T17:30:43.961258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.073494+00:00",
        "etl_stage_id": "9a44aeb9-b569-4a38-b6db-e06d4fee9f41",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838-239-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6f79529b-5aaa-4f5c-8aa6-0670f34e281d",
        "created_date": "2020-05-12T17:30:43.863444+00:00",
        "modified_date": "2020-05-12T17:30:43.863444+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.058487+00:00",
        "etl_stage_id": "6f79529b-5aaa-4f5c-8aa6-0670f34e281d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1965",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "69be0339-d70e-4249-8774-c3bad819ab47",
        "created_date": "2020-05-12T17:30:43.434460+00:00",
        "modified_date": "2020-05-12T17:30:43.434460+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.047233+00:00",
        "etl_stage_id": "69be0339-d70e-4249-8774-c3bad819ab47",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1863",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "51a273bb-6cf5-4595-a64d-a533448582d7",
        "created_date": "2020-05-12T17:30:43.388607+00:00",
        "modified_date": "2020-05-12T17:30:43.388607+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.023786+00:00",
        "etl_stage_id": "51a273bb-6cf5-4595-a64d-a533448582d7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1547",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9a2f1d11-37f6-495a-85f7-5fe945db5ae8",
        "created_date": "2020-05-12T17:30:42.836254+00:00",
        "modified_date": "2020-05-12T17:30:42.836254+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.999846+00:00",
        "etl_stage_id": "9a2f1d11-37f6-495a-85f7-5fe945db5ae8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "363b0846-7542-47a8-9e3e-65dd22ee8417",
        "created_date": "2020-05-12T17:30:42.760655+00:00",
        "modified_date": "2020-05-12T17:30:42.760655+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.986841+00:00",
        "etl_stage_id": "363b0846-7542-47a8-9e3e-65dd22ee8417",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964-200-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "23c91c91-d189-45d2-8394-3f5fb866034e",
        "created_date": "2020-05-12T17:30:42.583473+00:00",
        "modified_date": "2020-05-12T17:30:42.583473+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.965282+00:00",
        "etl_stage_id": "23c91c91-d189-45d2-8394-3f5fb866034e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1862",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c9cb118f-9995-494a-a1af-7981171d2263",
        "created_date": "2020-05-12T17:30:42.182364+00:00",
        "modified_date": "2020-05-12T17:30:42.182364+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.963926+00:00",
        "etl_stage_id": "c9cb118f-9995-494a-a1af-7981171d2263",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1838",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1b7509bf-819f-44e5-a1e7-03fed5274d8e",
        "created_date": "2020-05-12T17:30:42.103935+00:00",
        "modified_date": "2020-05-12T17:30:42.103935+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.945897+00:00",
        "etl_stage_id": "1b7509bf-819f-44e5-a1e7-03fed5274d8e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286-249-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d7a1a91f-cc4e-41a0-beee-41487465091a",
        "created_date": "2020-05-12T17:30:41.746100+00:00",
        "modified_date": "2020-05-12T17:30:41.746100+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.923811+00:00",
        "etl_stage_id": "d7a1a91f-cc4e-41a0-beee-41487465091a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1964",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "fc57ccb2-7a54-430f-b2bc-4b8e4ef10815",
        "created_date": "2020-05-12T17:30:41.707420+00:00",
        "modified_date": "2020-05-12T17:30:41.707420+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.913794+00:00",
        "etl_stage_id": "fc57ccb2-7a54-430f-b2bc-4b8e4ef10815",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1545",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "97b8c57c-a465-4035-a7ac-571c14869ac6",
        "created_date": "2020-05-12T17:30:41.444447+00:00",
        "modified_date": "2020-05-12T17:30:41.444447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.887759+00:00",
        "etl_stage_id": "97b8c57c-a465-4035-a7ac-571c14869ac6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837-238-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "71c2004f-75a3-4413-a75c-2a856fc27065",
        "created_date": "2020-05-12T17:30:41.244891+00:00",
        "modified_date": "2020-05-12T17:30:41.244891+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.883420+00:00",
        "etl_stage_id": "71c2004f-75a3-4413-a75c-2a856fc27065",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-1861",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "57658f1c-653e-43a6-84c9-9536b3952d22",
        "created_date": "2020-05-12T17:30:41.019712+00:00",
        "modified_date": "2020-05-12T17:30:41.019712+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.870436+00:00",
        "etl_stage_id": "57658f1c-653e-43a6-84c9-9536b3952d22",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2286",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1b0c430c-22d0-4cdf-bd3c-b24d1ff16f7e",
        "created_date": "2020-05-12T17:30:40.574079+00:00",
        "modified_date": "2020-05-12T17:30:40.574079+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.860207+00:00",
        "etl_stage_id": "1b0c430c-22d0-4cdf-bd3c-b24d1ff16f7e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963-199-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "011066da-8ae2-4a75-bbd7-4a401cf5cb13",
        "created_date": "2020-05-12T17:30:40.465666+00:00",
        "modified_date": "2020-05-12T17:30:40.465666+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.844525+00:00",
        "etl_stage_id": "011066da-8ae2-4a75-bbd7-4a401cf5cb13",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1163",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5aea2bd3-5495-4ab5-aa9d-1d0e3e72d0dd",
        "created_date": "2020-05-12T17:30:40.064046+00:00",
        "modified_date": "2020-05-12T17:30:40.064046+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.830339+00:00",
        "etl_stage_id": "5aea2bd3-5495-4ab5-aa9d-1d0e3e72d0dd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1837",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9897f164-e68a-4b45-a092-43aaa1069234",
        "created_date": "2020-05-12T17:30:39.829304+00:00",
        "modified_date": "2020-05-12T17:30:39.829304+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.816687+00:00",
        "etl_stage_id": "9897f164-e68a-4b45-a092-43aaa1069234",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1989",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "345cab51-8d81-42b5-be5e-77d1fb21f6dd",
        "created_date": "2020-05-12T17:30:39.438690+00:00",
        "modified_date": "2020-05-12T17:30:39.438690+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.795014+00:00",
        "etl_stage_id": "345cab51-8d81-42b5-be5e-77d1fb21f6dd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1963",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e2537647-c31d-42b6-9ff0-873bc8db9303",
        "created_date": "2020-05-12T17:30:39.372095+00:00",
        "modified_date": "2020-05-12T17:30:39.372095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.779810+00:00",
        "etl_stage_id": "e2537647-c31d-42b6-9ff0-873bc8db9303",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2285",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3b7fb5d4-36d1-488e-8b60-a6efef187354",
        "created_date": "2020-05-12T17:30:38.967856+00:00",
        "modified_date": "2020-05-12T17:30:38.967856+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.760988+00:00",
        "etl_stage_id": "3b7fb5d4-36d1-488e-8b60-a6efef187354",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312-224-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "34d40b6b-d7e1-432b-945b-59e6ae1d6fb0",
        "created_date": "2020-05-12T17:30:38.452632+00:00",
        "modified_date": "2020-05-12T17:30:38.452632+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.750143+00:00",
        "etl_stage_id": "34d40b6b-d7e1-432b-945b-59e6ae1d6fb0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962-198-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "643a840e-4280-4c22-9155-9831cbd94c4c",
        "created_date": "2020-05-12T17:30:38.251788+00:00",
        "modified_date": "2020-05-12T17:30:38.251788+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.735595+00:00",
        "etl_stage_id": "643a840e-4280-4c22-9155-9831cbd94c4c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831-172-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3cfd3ea3-6269-478b-82ce-200f9ff896dc",
        "created_date": "2020-05-12T17:30:37.637595+00:00",
        "modified_date": "2020-05-12T17:30:37.637595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.722541+00:00",
        "etl_stage_id": "3cfd3ea3-6269-478b-82ce-200f9ff896dc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1962",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7b3c56d7-2dd6-454f-adf0-e7f9eb551bb5",
        "created_date": "2020-05-12T17:30:37.023513+00:00",
        "modified_date": "2020-05-12T17:30:37.023513+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.692919+00:00",
        "etl_stage_id": "7b3c56d7-2dd6-454f-adf0-e7f9eb551bb5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1988",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0562924d-4a82-457c-bab0-60d7666188b1",
        "created_date": "2020-05-12T17:30:36.934389+00:00",
        "modified_date": "2020-05-12T17:30:36.934389+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.669321+00:00",
        "etl_stage_id": "0562924d-4a82-457c-bab0-60d7666188b1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284-245-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "32c25d22-3529-41d6-8a4c-ed7809605667",
        "created_date": "2020-05-12T17:30:36.721366+00:00",
        "modified_date": "2020-05-12T17:30:36.721366+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.661368+00:00",
        "etl_stage_id": "32c25d22-3529-41d6-8a4c-ed7809605667",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2312",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5873b119-19be-4ae3-b56f-b7ff63445f00",
        "created_date": "2020-05-12T17:30:36.191727+00:00",
        "modified_date": "2020-05-12T17:30:36.191727+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.644073+00:00",
        "etl_stage_id": "5873b119-19be-4ae3-b56f-b7ff63445f00",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1831",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "40c45090-2a07-4853-b1fc-234e1fb45a09",
        "created_date": "2020-05-12T17:30:35.713251+00:00",
        "modified_date": "2020-05-12T17:30:35.713251+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.610517+00:00",
        "etl_stage_id": "40c45090-2a07-4853-b1fc-234e1fb45a09",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1987",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7c6759f8-445f-4d76-9f47-253b8b6aa1f1",
        "created_date": "2020-05-12T17:30:35.651709+00:00",
        "modified_date": "2020-05-12T17:30:35.651709+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.602462+00:00",
        "etl_stage_id": "7c6759f8-445f-4d76-9f47-253b8b6aa1f1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2284",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7c6d795e-f532-4a99-9847-6bc2a83abfe2",
        "created_date": "2020-05-12T17:30:35.491527+00:00",
        "modified_date": "2020-05-12T17:30:35.491527+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.585364+00:00",
        "etl_stage_id": "7c6d795e-f532-4a99-9847-6bc2a83abfe2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961-197-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "27b3e680-40bd-4694-91be-1be340e04f82",
        "created_date": "2020-05-12T17:30:35.175545+00:00",
        "modified_date": "2020-05-12T17:30:35.175545+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.562468+00:00",
        "etl_stage_id": "27b3e680-40bd-4694-91be-1be340e04f82",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2311",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0c5e05e5-9eda-4a1a-9d3e-41f629db1ee0",
        "created_date": "2020-05-12T17:30:34.874291+00:00",
        "modified_date": "2020-05-12T17:30:34.874291+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.553738+00:00",
        "etl_stage_id": "0c5e05e5-9eda-4a1a-9d3e-41f629db1ee0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829-171-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0b3bf120-bc4c-48b7-9d7d-8c910b2404bc",
        "created_date": "2020-05-12T17:30:34.810977+00:00",
        "modified_date": "2020-05-12T17:30:34.810977+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.538769+00:00",
        "etl_stage_id": "0b3bf120-bc4c-48b7-9d7d-8c910b2404bc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1961",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a841f532-16b2-4a25-be41-f49706810b17",
        "created_date": "2020-05-12T17:30:34.371857+00:00",
        "modified_date": "2020-05-12T17:30:34.371857+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.529348+00:00",
        "etl_stage_id": "a841f532-16b2-4a25-be41-f49706810b17",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0997f89e-4a94-46fc-b9ed-aa3a559ca0e8",
        "created_date": "2020-05-12T17:30:33.675739+00:00",
        "modified_date": "2020-05-12T17:30:33.675739+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.515874+00:00",
        "etl_stage_id": "0997f89e-4a94-46fc-b9ed-aa3a559ca0e8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954-190-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "852c9fa0-6922-4d37-acd7-4434a8c91ddb",
        "created_date": "2020-05-12T17:30:33.057052+00:00",
        "modified_date": "2020-05-12T17:30:33.057052+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.500846+00:00",
        "etl_stage_id": "852c9fa0-6922-4d37-acd7-4434a8c91ddb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1986",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "be095dca-c2d9-41e1-87c4-f8eab2cf7829",
        "created_date": "2020-05-12T17:30:32.896103+00:00",
        "modified_date": "2020-05-12T17:30:32.896103+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.487444+00:00",
        "etl_stage_id": "be095dca-c2d9-41e1-87c4-f8eab2cf7829",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1829",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e26f6e02-19a9-44b2-a0b2-5064799bc7b9",
        "created_date": "2020-05-12T17:30:32.795561+00:00",
        "modified_date": "2020-05-12T17:30:32.795561+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.453185+00:00",
        "etl_stage_id": "e26f6e02-19a9-44b2-a0b2-5064799bc7b9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032-258-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "efbb262b-c46c-451d-b3e2-bfce883dc6dc",
        "created_date": "2020-05-12T17:30:32.168009+00:00",
        "modified_date": "2020-05-12T17:30:32.168009+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.443364+00:00",
        "etl_stage_id": "efbb262b-c46c-451d-b3e2-bfce883dc6dc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310-223-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9ecb263d-4c3f-4f4c-b37e-6a060aa4c9d1",
        "created_date": "2020-05-12T17:30:31.987648+00:00",
        "modified_date": "2020-05-12T17:30:31.987648+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.428981+00:00",
        "etl_stage_id": "9ecb263d-4c3f-4f4c-b37e-6a060aa4c9d1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1954",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5c524bd7-1528-4dd4-ba0d-e2fd0dd3e9c0",
        "created_date": "2020-05-12T17:30:31.949741+00:00",
        "modified_date": "2020-05-12T17:30:31.949741+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.401022+00:00",
        "etl_stage_id": "5c524bd7-1528-4dd4-ba0d-e2fd0dd3e9c0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-247-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f461ffc8-3d36-45bc-88cb-706415023b34",
        "created_date": "2020-05-12T17:30:31.505289+00:00",
        "modified_date": "2020-05-12T17:30:31.505289+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.380934+00:00",
        "etl_stage_id": "f461ffc8-3d36-45bc-88cb-706415023b34",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1985",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "19072069-a422-4e75-a7a4-c22d3f1c7961",
        "created_date": "2020-05-12T17:30:31.369923+00:00",
        "modified_date": "2020-05-12T17:30:31.369923+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.369071+00:00",
        "etl_stage_id": "19072069-a422-4e75-a7a4-c22d3f1c7961",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2032",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cd304fd1-f2e5-41ba-ba49-20a2dcc3ec6c",
        "created_date": "2020-05-12T17:30:30.501010+00:00",
        "modified_date": "2020-05-12T17:30:30.501010+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.356218+00:00",
        "etl_stage_id": "cd304fd1-f2e5-41ba-ba49-20a2dcc3ec6c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2310",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "252b1364-471f-4ac7-bc46-a09929ba6d1c",
        "created_date": "2020-05-12T17:30:30.424808+00:00",
        "modified_date": "2020-05-12T17:30:30.424808+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.317303+00:00",
        "etl_stage_id": "252b1364-471f-4ac7-bc46-a09929ba6d1c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826-246-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e5a4b028-f750-4221-ab32-5258d32ac5b4",
        "created_date": "2020-05-12T17:30:30.210512+00:00",
        "modified_date": "2020-05-12T17:30:30.210512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.303429+00:00",
        "etl_stage_id": "e5a4b028-f750-4221-ab32-5258d32ac5b4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801-187-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7aac8f2f-dc13-4e25-a967-802f93e6f6d1",
        "created_date": "2020-05-12T17:30:29.419687+00:00",
        "modified_date": "2020-05-12T17:30:29.419687+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.291985+00:00",
        "etl_stage_id": "7aac8f2f-dc13-4e25-a967-802f93e6f6d1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1984",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e20c35cf-7f6f-46c7-920f-2c6075a7f87e",
        "created_date": "2020-05-12T17:30:28.895891+00:00",
        "modified_date": "2020-05-12T17:30:28.895891+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.270272+00:00",
        "etl_stage_id": "e20c35cf-7f6f-46c7-920f-2c6075a7f87e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-257-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "665a1853-b85e-4d92-9df6-441e4a0e6bbc",
        "created_date": "2020-05-12T17:30:28.479261+00:00",
        "modified_date": "2020-05-12T17:30:28.479261+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.235218+00:00",
        "etl_stage_id": "665a1853-b85e-4d92-9df6-441e4a0e6bbc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1801",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5969de95-bf59-4cf6-92bc-3f41087518f5",
        "created_date": "2020-05-12T17:30:28.346044+00:00",
        "modified_date": "2020-05-12T17:30:28.346044+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.219694+00:00",
        "etl_stage_id": "5969de95-bf59-4cf6-92bc-3f41087518f5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309-222-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6760cd30-8c37-4ba4-8721-ef30a1e85170",
        "created_date": "2020-05-12T17:30:28.132738+00:00",
        "modified_date": "2020-05-12T17:30:28.132738+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.214168+00:00",
        "etl_stage_id": "6760cd30-8c37-4ba4-8721-ef30a1e85170",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1826",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ecabc1df-7d6b-4d04-9e61-e984df10f5e7",
        "created_date": "2020-05-12T17:30:28.103722+00:00",
        "modified_date": "2020-05-12T17:30:28.103722+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.191442+00:00",
        "etl_stage_id": "ecabc1df-7d6b-4d04-9e61-e984df10f5e7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1983",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f1fa2b0f-290e-47da-b8f7-42a9bdebfd9b",
        "created_date": "2020-05-12T17:30:27.803171+00:00",
        "modified_date": "2020-05-12T17:30:27.803171+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.168566+00:00",
        "etl_stage_id": "f1fa2b0f-290e-47da-b8f7-42a9bdebfd9b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1750",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "73b3495d-3606-4699-a955-0bed6d1be1a2",
        "created_date": "2020-05-12T17:30:27.483116+00:00",
        "modified_date": "2020-05-12T17:30:27.483116+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.156986+00:00",
        "etl_stage_id": "73b3495d-3606-4699-a955-0bed6d1be1a2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783-146-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9958a8b6-b695-4f5b-8e51-e350765e596f",
        "created_date": "2020-05-12T17:30:27.150550+00:00",
        "modified_date": "2020-05-12T17:30:27.150550+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.144134+00:00",
        "etl_stage_id": "9958a8b6-b695-4f5b-8e51-e350765e596f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031-256-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c96e5316-6b2b-4557-a152-6d3137272152",
        "created_date": "2020-05-12T17:30:27.116637+00:00",
        "modified_date": "2020-05-12T17:30:27.116637+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.131342+00:00",
        "etl_stage_id": "c96e5316-6b2b-4557-a152-6d3137272152",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2309",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f11b02ef-f487-449d-80b4-dcd0a2a4987d",
        "created_date": "2020-05-12T17:30:26.483977+00:00",
        "modified_date": "2020-05-12T17:30:26.483977+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.119855+00:00",
        "etl_stage_id": "f11b02ef-f487-449d-80b4-dcd0a2a4987d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1749",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c0a8c824-2e9c-4317-870e-c543e12ad530",
        "created_date": "2020-05-12T17:30:26.303892+00:00",
        "modified_date": "2020-05-12T17:30:26.303892+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.108351+00:00",
        "etl_stage_id": "c0a8c824-2e9c-4317-870e-c543e12ad530",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1783",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "af7fe0ac-ad96-4b08-afa7-9267e0743de1",
        "created_date": "2020-05-12T17:30:25.988377+00:00",
        "modified_date": "2020-05-12T17:30:25.988377+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.095267+00:00",
        "etl_stage_id": "af7fe0ac-ad96-4b08-afa7-9267e0743de1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578-61-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "58452c4e-1d9b-4a8a-b8ac-079c4ee8da81",
        "created_date": "2020-05-12T17:30:25.387194+00:00",
        "modified_date": "2020-05-12T17:30:25.387194+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.083036+00:00",
        "etl_stage_id": "58452c4e-1d9b-4a8a-b8ac-079c4ee8da81",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2031",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a01e3d4d-df28-4ec8-bcd1-379141420544",
        "created_date": "2020-05-12T17:30:25.354957+00:00",
        "modified_date": "2020-05-12T17:30:25.354957+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.062008+00:00",
        "etl_stage_id": "a01e3d4d-df28-4ec8-bcd1-379141420544",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781-144-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "555e0854-e553-4727-81bf-d49305d5f6d6",
        "created_date": "2020-05-12T17:30:25.110099+00:00",
        "modified_date": "2020-05-12T17:30:25.110099+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.039437+00:00",
        "etl_stage_id": "555e0854-e553-4727-81bf-d49305d5f6d6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1982",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0b47ed9c-d142-4743-b185-c4c3da3bb32f",
        "created_date": "2020-05-12T17:30:24.609641+00:00",
        "modified_date": "2020-05-12T17:30:24.609641+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.015850+00:00",
        "etl_stage_id": "0b47ed9c-d142-4743-b185-c4c3da3bb32f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308-221-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e6c2322b-ebca-4a7b-af60-11bd05100b23",
        "created_date": "2020-05-12T17:30:24.330609+00:00",
        "modified_date": "2020-05-12T17:30:24.330609+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:28.006433+00:00",
        "etl_stage_id": "e6c2322b-ebca-4a7b-af60-11bd05100b23",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1578",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "48b07182-4dbb-462c-b8cf-2ab364d0297c",
        "created_date": "2020-05-12T17:30:24.095893+00:00",
        "modified_date": "2020-05-12T17:30:24.095893+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.992286+00:00",
        "etl_stage_id": "48b07182-4dbb-462c-b8cf-2ab364d0297c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1781",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "faacd643-c2db-4157-9ec6-a016da3a9aa5",
        "created_date": "2020-05-12T17:30:23.869815+00:00",
        "modified_date": "2020-05-12T17:30:23.869815+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.978007+00:00",
        "etl_stage_id": "faacd643-c2db-4157-9ec6-a016da3a9aa5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024-241-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c26e161f-a00e-4f9a-965b-0d69d2ee81a7",
        "created_date": "2020-05-12T17:30:23.293708+00:00",
        "modified_date": "2020-05-12T17:30:23.293708+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.965487+00:00",
        "etl_stage_id": "c26e161f-a00e-4f9a-965b-0d69d2ee81a7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2308",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4ac6379f-8f16-4016-b279-faa5092e6a51",
        "created_date": "2020-05-12T17:30:22.760201+00:00",
        "modified_date": "2020-05-12T17:30:22.760201+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.952997+00:00",
        "etl_stage_id": "4ac6379f-8f16-4016-b279-faa5092e6a51",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1981",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ef719098-f098-431a-80e0-cfb4810693b1",
        "created_date": "2020-05-12T17:30:22.744991+00:00",
        "modified_date": "2020-05-12T17:30:22.744991+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.940464+00:00",
        "etl_stage_id": "ef719098-f098-431a-80e0-cfb4810693b1",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478-43-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cd2bd79c-b744-405c-9430-c594a75120d4",
        "created_date": "2020-05-12T17:30:22.098194+00:00",
        "modified_date": "2020-05-12T17:30:22.098194+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.928036+00:00",
        "etl_stage_id": "cd2bd79c-b744-405c-9430-c594a75120d4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779-142-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d59bf3c3-d878-423e-8e55-0d17d5a1983d",
        "created_date": "2020-05-12T17:30:21.831924+00:00",
        "modified_date": "2020-05-12T17:30:21.831924+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.900206+00:00",
        "etl_stage_id": "d59bf3c3-d878-423e-8e55-0d17d5a1983d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1980",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "35dc5984-a6e1-4682-9856-4509374637e5",
        "created_date": "2020-05-12T17:30:21.648447+00:00",
        "modified_date": "2020-05-12T17:30:21.648447+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.876062+00:00",
        "etl_stage_id": "35dc5984-a6e1-4682-9856-4509374637e5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2024",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "89c37de2-143f-4663-994e-e0a3555d1cd3",
        "created_date": "2020-05-12T17:30:21.356339+00:00",
        "modified_date": "2020-05-12T17:30:21.356339+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.850297+00:00",
        "etl_stage_id": "89c37de2-143f-4663-994e-e0a3555d1cd3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1478",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c3d5ea12-7591-4738-83b4-8ccbf07773ef",
        "created_date": "2020-05-12T17:30:21.295062+00:00",
        "modified_date": "2020-05-12T17:30:21.295062+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.829778+00:00",
        "etl_stage_id": "c3d5ea12-7591-4738-83b4-8ccbf07773ef",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307-220-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d4dce9fd-139b-40b6-a695-a412924dfa46",
        "created_date": "2020-05-12T17:30:21.117003+00:00",
        "modified_date": "2020-05-12T17:30:21.117003+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.806348+00:00",
        "etl_stage_id": "d4dce9fd-139b-40b6-a695-a412924dfa46",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1979",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "28e5b61a-1046-4192-b94b-b78340eabd06",
        "created_date": "2020-05-12T17:30:20.811212+00:00",
        "modified_date": "2020-05-12T17:30:20.811212+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.776693+00:00",
        "etl_stage_id": "28e5b61a-1046-4192-b94b-b78340eabd06",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023-240-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2a817ced-c886-4efc-994e-fb2abe80f929",
        "created_date": "2020-05-12T17:30:20.277664+00:00",
        "modified_date": "2020-05-12T17:30:20.277664+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.761405+00:00",
        "etl_stage_id": "2a817ced-c886-4efc-994e-fb2abe80f929",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477-42-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ce1eeb1d-9a53-45b2-918a-14b57c1bc471",
        "created_date": "2020-05-12T17:30:20.242518+00:00",
        "modified_date": "2020-05-12T17:30:20.242518+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.750501+00:00",
        "etl_stage_id": "ce1eeb1d-9a53-45b2-918a-14b57c1bc471",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1779",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "54c23e95-1dcb-4b03-98c2-b2443695f77c",
        "created_date": "2020-05-12T17:30:20.077930+00:00",
        "modified_date": "2020-05-12T17:30:20.077930+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.724189+00:00",
        "etl_stage_id": "54c23e95-1dcb-4b03-98c2-b2443695f77c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2307",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d2355b72-9176-41ff-a7a3-c1455388a67d",
        "created_date": "2020-05-12T17:30:19.952777+00:00",
        "modified_date": "2020-05-12T17:30:19.952777+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.714127+00:00",
        "etl_stage_id": "d2355b72-9176-41ff-a7a3-c1455388a67d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "CONGSTAR-1978",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "9a12954d-439c-48b2-9301-60fc891ab81c",
        "created_date": "2020-05-12T17:30:19.547427+00:00",
        "modified_date": "2020-05-12T17:30:19.547427+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.700557+00:00",
        "etl_stage_id": "9a12954d-439c-48b2-9301-60fc891ab81c",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1477",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7c5d7507-a361-4c45-8fab-dfdc5f021a8a",
        "created_date": "2020-05-12T17:30:19.427762+00:00",
        "modified_date": "2020-05-12T17:30:19.427762+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.690400+00:00",
        "etl_stage_id": "7c5d7507-a361-4c45-8fab-dfdc5f021a8a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777-140-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6a743a2b-935b-48f4-aeed-bae3b2870e4f",
        "created_date": "2020-05-12T17:30:19.271732+00:00",
        "modified_date": "2020-05-12T17:30:19.271732+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.668469+00:00",
        "etl_stage_id": "6a743a2b-935b-48f4-aeed-bae3b2870e4f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306-219-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "433abc25-e2e4-44db-a36e-5877099d6b01",
        "created_date": "2020-05-12T17:30:18.953750+00:00",
        "modified_date": "2020-05-12T17:30:18.953750+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.656370+00:00",
        "etl_stage_id": "433abc25-e2e4-44db-a36e-5877099d6b01",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476-47-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7d5886b3-c0e1-4277-b461-0c5711113fa2",
        "created_date": "2020-05-12T17:30:18.761430+00:00",
        "modified_date": "2020-05-12T17:30:18.761430+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.644272+00:00",
        "etl_stage_id": "7d5886b3-c0e1-4277-b461-0c5711113fa2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1887",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ab91e4fa-0a88-4de9-848f-d63fc7de4181",
        "created_date": "2020-05-12T17:30:18.030874+00:00",
        "modified_date": "2020-05-12T17:30:18.030874+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.634164+00:00",
        "etl_stage_id": "ab91e4fa-0a88-4de9-848f-d63fc7de4181",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1476",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3b4fadc7-6b08-4a5b-85f4-4a7286d5264a",
        "created_date": "2020-05-12T17:30:17.929715+00:00",
        "modified_date": "2020-05-12T17:30:17.929715+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.613908+00:00",
        "etl_stage_id": "3b4fadc7-6b08-4a5b-85f4-4a7286d5264a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2306",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "16e303cb-740c-451a-a89e-91ff7481ff1f",
        "created_date": "2020-05-12T17:30:17.888162+00:00",
        "modified_date": "2020-05-12T17:30:17.888162+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.602366+00:00",
        "etl_stage_id": "16e303cb-740c-451a-a89e-91ff7481ff1f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1777",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "866f36e8-13e3-4f93-b382-2e5e211d6c37",
        "created_date": "2020-05-12T17:30:17.806905+00:00",
        "modified_date": "2020-05-12T17:30:17.806905+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.589556+00:00",
        "etl_stage_id": "866f36e8-13e3-4f93-b382-2e5e211d6c37",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1885",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "224dacf6-2c7e-41f1-94c5-c0d7cd70b9c6",
        "created_date": "2020-05-12T17:30:17.294140+00:00",
        "modified_date": "2020-05-12T17:30:17.294140+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.568011+00:00",
        "etl_stage_id": "224dacf6-2c7e-41f1-94c5-c0d7cd70b9c6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305-218-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7efc6e48-f5b2-4a1f-8227-429f9114a2c2",
        "created_date": "2020-05-12T17:30:17.179794+00:00",
        "modified_date": "2020-05-12T17:30:17.179794+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.555225+00:00",
        "etl_stage_id": "7efc6e48-f5b2-4a1f-8227-429f9114a2c2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475-46-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "eac17ba5-9efe-4c29-bbed-fcdc97abc7f7",
        "created_date": "2020-05-12T17:30:16.975650+00:00",
        "modified_date": "2020-05-12T17:30:16.975650+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.542961+00:00",
        "etl_stage_id": "eac17ba5-9efe-4c29-bbed-fcdc97abc7f7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1475",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cb425f9d-88ac-4213-9a9a-4e4e2bd642fa",
        "created_date": "2020-05-12T17:30:16.801156+00:00",
        "modified_date": "2020-05-12T17:30:16.801156+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.518937+00:00",
        "etl_stage_id": "cb425f9d-88ac-4213-9a9a-4e4e2bd642fa",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "BLAU-1884",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7e813d2d-5cdd-41e2-8846-dc00b8343e29",
        "created_date": "2020-05-12T17:30:16.774265+00:00",
        "modified_date": "2020-05-12T17:30:16.774265+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.492631+00:00",
        "etl_stage_id": "7e813d2d-5cdd-41e2-8846-dc00b8343e29",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZSDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2305",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bcad9370-6625-453b-b4c5-9e95fb3d25ba",
        "created_date": "2020-05-12T17:30:16.771954+00:00",
        "modified_date": "2020-05-12T17:30:16.771954+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:27.483859+00:00",
        "etl_stage_id": "bcad9370-6625-453b-b4c5-9e95fb3d25ba",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474-53-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "607a21a6-6c1c-4c0c-99c9-b7b3f95c63d4",
        "created_date": "2020-05-12T17:31:12.018776+00:00",
        "modified_date": "2020-05-12T17:31:12.018776+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.980243+00:00",
        "etl_stage_id": "607a21a6-6c1c-4c0c-99c9-b7b3f95c63d4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1474",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "04fd4d09-d286-434d-83c7-0681a0a6b8d8",
        "created_date": "2020-05-12T17:31:11.523971+00:00",
        "modified_date": "2020-05-12T17:31:11.523971+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.976182+00:00",
        "etl_stage_id": "04fd4d09-d286-434d-83c7-0681a0a6b8d8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775-138-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d01b043c-0be9-46d7-b9b4-493629e165e2",
        "created_date": "2020-05-12T17:31:11.458096+00:00",
        "modified_date": "2020-05-12T17:31:11.458096+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.961121+00:00",
        "etl_stage_id": "d01b043c-0be9-46d7-b9b4-493629e165e2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473-51-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "27d5d4c2-25e9-430e-9695-f357c41463b0",
        "created_date": "2020-05-12T17:31:10.848006+00:00",
        "modified_date": "2020-05-12T17:31:10.848006+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.938871+00:00",
        "etl_stage_id": "27d5d4c2-25e9-430e-9695-f357c41463b0",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1775",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2378e94e-05fc-495e-a70b-868ffa925d9f",
        "created_date": "2020-05-12T17:31:10.747616+00:00",
        "modified_date": "2020-05-12T17:31:10.747616+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.916487+00:00",
        "etl_stage_id": "2378e94e-05fc-495e-a70b-868ffa925d9f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773-136-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5b65913e-d047-4a39-a99c-14aff82d8af3",
        "created_date": "2020-05-12T17:31:10.321394+00:00",
        "modified_date": "2020-05-12T17:31:10.321394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.893622+00:00",
        "etl_stage_id": "5b65913e-d047-4a39-a99c-14aff82d8af3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1473",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "a2462b98-86fb-4cf2-ae32-c0f02dfdf500",
        "created_date": "2020-05-12T17:31:10.149863+00:00",
        "modified_date": "2020-05-12T17:31:10.149863+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.869741+00:00",
        "etl_stage_id": "a2462b98-86fb-4cf2-ae32-c0f02dfdf500",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472-52-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "8378fd1c-0134-47c1-8f85-145165708b24",
        "created_date": "2020-05-12T17:31:09.779713+00:00",
        "modified_date": "2020-05-12T17:31:09.779713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.858747+00:00",
        "etl_stage_id": "8378fd1c-0134-47c1-8f85-145165708b24",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1773",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bc05f07c-c84c-4319-8619-df6905cb4e31",
        "created_date": "2020-05-12T17:31:09.649164+00:00",
        "modified_date": "2020-05-12T17:31:09.649164+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.845190+00:00",
        "etl_stage_id": "bc05f07c-c84c-4319-8619-df6905cb4e31",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1472",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "801c3f39-c9c4-4664-b55e-3588100e9ffe",
        "created_date": "2020-05-12T17:31:09.409653+00:00",
        "modified_date": "2020-05-12T17:31:09.409653+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.823541+00:00",
        "etl_stage_id": "801c3f39-c9c4-4664-b55e-3588100e9ffe",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-237-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a8d73e1d-9451-48be-a902-e28f6744cb49",
        "created_date": "2020-05-12T17:31:09.215713+00:00",
        "modified_date": "2020-05-12T17:31:09.215713+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.811155+00:00",
        "etl_stage_id": "a8d73e1d-9451-48be-a902-e28f6744cb49",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471-58-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 101,
            "currency": "EUR"
        },
        "id": "e9340029-031b-476f-9ce8-b1507a4975ad",
        "created_date": "2020-05-12T17:31:08.626956+00:00",
        "modified_date": "2020-05-12T17:31:08.626956+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.798843+00:00",
        "etl_stage_id": "e9340029-031b-476f-9ce8-b1507a4975ad",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771-163-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "11f337cf-c3b3-4b78-8d22-9117279117d3",
        "created_date": "2020-05-12T17:31:08.322568+00:00",
        "modified_date": "2020-05-12T17:31:08.322568+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.778048+00:00",
        "etl_stage_id": "11f337cf-c3b3-4b78-8d22-9117279117d3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2023",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7daaa7c4-d7ef-4588-817e-4a60fc103158",
        "created_date": "2020-05-12T17:31:08.140562+00:00",
        "modified_date": "2020-05-12T17:31:08.140562+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.753088+00:00",
        "etl_stage_id": "7daaa7c4-d7ef-4588-817e-4a60fc103158",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1471",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "6059a07f-5fb9-43e8-8d90-6b28ea0e60ac",
        "created_date": "2020-05-12T17:31:08.102175+00:00",
        "modified_date": "2020-05-12T17:31:08.102175+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.731437+00:00",
        "etl_stage_id": "6059a07f-5fb9-43e8-8d90-6b28ea0e60ac",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2007",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "04d0ab1f-1a09-40d7-bc8d-a9602fb1d341",
        "created_date": "2020-05-12T17:31:07.894394+00:00",
        "modified_date": "2020-05-12T17:31:07.894394+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.719318+00:00",
        "etl_stage_id": "04d0ab1f-1a09-40d7-bc8d-a9602fb1d341",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1771",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "16db08db-43f5-4ee2-863f-bd5c979fc167",
        "created_date": "2020-05-12T17:31:07.784330+00:00",
        "modified_date": "2020-05-12T17:31:07.784330+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.707128+00:00",
        "etl_stage_id": "16db08db-43f5-4ee2-863f-bd5c979fc167",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470-55-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "561001c2-c7a9-4731-b8f6-29da16d1adfd",
        "created_date": "2020-05-12T17:31:07.499125+00:00",
        "modified_date": "2020-05-12T17:31:07.499125+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.695695+00:00",
        "etl_stage_id": "561001c2-c7a9-4731-b8f6-29da16d1adfd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2006",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ef8e144d-4ee1-410e-91a2-820a0516881f",
        "created_date": "2020-05-12T17:31:07.475809+00:00",
        "modified_date": "2020-05-12T17:31:07.475809+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.682078+00:00",
        "etl_stage_id": "ef8e144d-4ee1-410e-91a2-820a0516881f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-242-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1df91553-9890-478d-b5d7-62de476a0b27",
        "created_date": "2020-05-12T17:31:07.202652+00:00",
        "modified_date": "2020-05-12T17:31:07.202652+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.661252+00:00",
        "etl_stage_id": "1df91553-9890-478d-b5d7-62de476a0b27",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1470",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4da52fdf-4aca-4d93-95a9-e0b155cbb089",
        "created_date": "2020-05-12T17:31:07.052037+00:00",
        "modified_date": "2020-05-12T17:31:07.052037+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.647694+00:00",
        "etl_stage_id": "4da52fdf-4aca-4d93-95a9-e0b155cbb089",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769-161-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "aa71f113-a6e0-407b-a9d4-83d2e5786cf7",
        "created_date": "2020-05-12T17:31:06.655325+00:00",
        "modified_date": "2020-05-12T17:31:06.655325+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.635504+00:00",
        "etl_stage_id": "aa71f113-a6e0-407b-a9d4-83d2e5786cf7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2005",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c0accc4a-797b-4a7f-bf10-144130204a2b",
        "created_date": "2020-05-12T17:31:06.575659+00:00",
        "modified_date": "2020-05-12T17:31:06.575659+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.622051+00:00",
        "etl_stage_id": "c0accc4a-797b-4a7f-bf10-144130204a2b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469-57-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0bb7069b-48d3-4a5a-a38e-c05a11957351",
        "created_date": "2020-05-12T17:31:06.486170+00:00",
        "modified_date": "2020-05-12T17:31:06.486170+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.600242+00:00",
        "etl_stage_id": "0bb7069b-48d3-4a5a-a38e-c05a11957351",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1769",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c721b586-7c8a-439e-a05f-fbdd63d7f7e2",
        "created_date": "2020-05-12T17:31:06.167498+00:00",
        "modified_date": "2020-05-12T17:31:06.167498+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.587287+00:00",
        "etl_stage_id": "c721b586-7c8a-439e-a05f-fbdd63d7f7e2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1469",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2fb28693-319b-4e24-b686-264f35b323e9",
        "created_date": "2020-05-12T17:31:05.990122+00:00",
        "modified_date": "2020-05-12T17:31:05.990122+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.575116+00:00",
        "etl_stage_id": "2fb28693-319b-4e24-b686-264f35b323e9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2004",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "274fcfd6-4788-4093-8927-1b3112585f68",
        "created_date": "2020-05-12T17:31:05.946870+00:00",
        "modified_date": "2020-05-12T17:31:05.946870+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.558196+00:00",
        "etl_stage_id": "274fcfd6-4788-4093-8927-1b3112585f68",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304-217-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c593434b-4059-496e-8d67-ddfc8cf8ea3a",
        "created_date": "2020-05-12T17:31:05.856646+00:00",
        "modified_date": "2020-05-12T17:31:05.856646+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.547918+00:00",
        "etl_stage_id": "c593434b-4059-496e-8d67-ddfc8cf8ea3a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761-153-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ed53ed6b-cec5-472f-b444-e6817f4c0218",
        "created_date": "2020-05-12T17:31:05.536677+00:00",
        "modified_date": "2020-05-12T17:31:05.536677+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.527748+00:00",
        "etl_stage_id": "ed53ed6b-cec5-472f-b444-e6817f4c0218",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2003",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "94b055c0-18bb-4a68-912e-aef4fd809df2",
        "created_date": "2020-05-12T17:31:05.463603+00:00",
        "modified_date": "2020-05-12T17:31:05.463603+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.516196+00:00",
        "etl_stage_id": "94b055c0-18bb-4a68-912e-aef4fd809df2",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2304",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "965730f9-c189-4b72-b537-d3e3bee84322",
        "created_date": "2020-05-12T17:31:05.354095+00:00",
        "modified_date": "2020-05-12T17:31:05.354095+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.504737+00:00",
        "etl_stage_id": "965730f9-c189-4b72-b537-d3e3bee84322",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-2002",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "69b9fab1-8921-4eaf-8ce6-ab461cdf5438",
        "created_date": "2020-05-12T17:31:04.932282+00:00",
        "modified_date": "2020-05-12T17:31:04.932282+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.492669+00:00",
        "etl_stage_id": "69b9fab1-8921-4eaf-8ce6-ab461cdf5438",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-1132",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f806f1c6-00f9-4d06-bbb4-3a422ea1856e",
        "created_date": "2020-05-12T17:31:04.855004+00:00",
        "modified_date": "2020-05-12T17:31:04.855004+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.480573+00:00",
        "etl_stage_id": "f806f1c6-00f9-4d06-bbb4-3a422ea1856e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1761",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ba46a4a1-122a-43a2-a9f8-24bee4f8ab03",
        "created_date": "2020-05-12T17:31:04.461154+00:00",
        "modified_date": "2020-05-12T17:31:04.461154+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.459484+00:00",
        "etl_stage_id": "ba46a4a1-122a-43a2-a9f8-24bee4f8ab03",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-251-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "207e172b-a07d-4944-bd0a-b6df3ba7cc46",
        "created_date": "2020-05-12T17:31:04.323227+00:00",
        "modified_date": "2020-05-12T17:31:04.323227+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.434493+00:00",
        "etl_stage_id": "207e172b-a07d-4944-bd0a-b6df3ba7cc46",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-2022",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "f5f589e2-b974-431e-990e-2acddb44abf3",
        "created_date": "2020-05-12T17:31:04.295608+00:00",
        "modified_date": "2020-05-12T17:31:04.295608+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.423726+00:00",
        "etl_stage_id": "f5f589e2-b974-431e-990e-2acddb44abf3",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303-216-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "affbdc73-6d38-48ee-9f5d-f92c582f520a",
        "created_date": "2020-05-12T17:31:04.101588+00:00",
        "modified_date": "2020-05-12T17:31:04.101588+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.411497+00:00",
        "etl_stage_id": "affbdc73-6d38-48ee-9f5d-f92c582f520a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953-250-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8c8d82ad-c3e7-4aae-9945-88aaab439d96",
        "created_date": "2020-05-12T17:31:03.769403+00:00",
        "modified_date": "2020-05-12T17:31:03.769403+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.389827+00:00",
        "etl_stage_id": "8c8d82ad-c3e7-4aae-9945-88aaab439d96",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1993",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "3de0f263-fe11-422b-abda-6ff40b048fa6",
        "created_date": "2020-05-12T17:31:03.690072+00:00",
        "modified_date": "2020-05-12T17:31:03.690072+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.376793+00:00",
        "etl_stage_id": "3de0f263-fe11-422b-abda-6ff40b048fa6",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2303",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "10977d6b-2d2c-467c-ad66-c24aa6ea224b",
        "created_date": "2020-05-12T17:31:03.399880+00:00",
        "modified_date": "2020-05-12T17:31:03.399880+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.365236+00:00",
        "etl_stage_id": "10977d6b-2d2c-467c-ad66-c24aa6ea224b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1953",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1da31aba-32c2-4624-991e-d55c5a4aadcb",
        "created_date": "2020-05-12T17:31:03.227418+00:00",
        "modified_date": "2020-05-12T17:31:03.227418+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.349487+00:00",
        "etl_stage_id": "1da31aba-32c2-4624-991e-d55c5a4aadcb",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759-151-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "96ff16f6-0057-4e1b-b5b3-c39346762194",
        "created_date": "2020-05-12T17:31:03.219861+00:00",
        "modified_date": "2020-05-12T17:31:03.219861+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.334812+00:00",
        "etl_stage_id": "96ff16f6-0057-4e1b-b5b3-c39346762194",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1992",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4c9b290b-7ae3-46ed-88a6-f07d8e928b20",
        "created_date": "2020-05-12T17:31:02.984007+00:00",
        "modified_date": "2020-05-12T17:31:02.984007+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.308278+00:00",
        "etl_stage_id": "4c9b290b-7ae3-46ed-88a6-f07d8e928b20",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1759",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "5c8716cf-b3f4-406a-b5ed-a177e608f9c4",
        "created_date": "2020-05-12T17:31:02.607132+00:00",
        "modified_date": "2020-05-12T17:31:02.607132+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.299434+00:00",
        "etl_stage_id": "5c8716cf-b3f4-406a-b5ed-a177e608f9c4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-255-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b1972e3b-a2fb-41ae-a947-f847fd8d649d",
        "created_date": "2020-05-12T17:31:02.449279+00:00",
        "modified_date": "2020-05-12T17:31:02.449279+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.290461+00:00",
        "etl_stage_id": "b1972e3b-a2fb-41ae-a947-f847fd8d649d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302-215-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "2010a7bd-7a08-435a-8991-5a97024baf29",
        "created_date": "2020-05-12T17:31:02.314591+00:00",
        "modified_date": "2020-05-12T17:31:02.314591+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.272494+00:00",
        "etl_stage_id": "2010a7bd-7a08-435a-8991-5a97024baf29",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757-149-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "dea7895c-1d8b-43b4-9a03-a1ad0de26fb9",
        "created_date": "2020-05-12T17:31:01.943047+00:00",
        "modified_date": "2020-05-12T17:31:01.943047+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.252287+00:00",
        "etl_stage_id": "dea7895c-1d8b-43b4-9a03-a1ad0de26fb9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924-254-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a5f1e022-1bff-49f8-b342-fd65eae3bac9",
        "created_date": "2020-05-12T17:31:01.895910+00:00",
        "modified_date": "2020-05-12T17:31:01.895910+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.232598+00:00",
        "etl_stage_id": "a5f1e022-1bff-49f8-b342-fd65eae3bac9",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1991",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a63cb462-3ec0-402e-9330-856b3eeea59b",
        "created_date": "2020-05-12T17:31:01.820002+00:00",
        "modified_date": "2020-05-12T17:31:01.820002+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.225245+00:00",
        "etl_stage_id": "a63cb462-3ec0-402e-9330-856b3eeea59b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2302",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4bc9bad8-f7df-4723-8d66-3b4393e05311",
        "created_date": "2020-05-12T17:31:01.777512+00:00",
        "modified_date": "2020-05-12T17:31:01.777512+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.204923+00:00",
        "etl_stage_id": "4bc9bad8-f7df-4723-8d66-3b4393e05311",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1757",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "d0c75c7d-4377-4d9b-9272-a76699222dca",
        "created_date": "2020-05-12T17:31:01.455804+00:00",
        "modified_date": "2020-05-12T17:31:01.455804+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.193430+00:00",
        "etl_stage_id": "d0c75c7d-4377-4d9b-9272-a76699222dca",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1816",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "cac32f53-820c-4782-858f-7d01642d5bb4",
        "created_date": "2020-05-12T17:31:01.405984+00:00",
        "modified_date": "2020-05-12T17:31:01.405984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.181461+00:00",
        "etl_stage_id": "cac32f53-820c-4782-858f-7d01642d5bb4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301-210-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "bedee321-cb02-4839-a8fb-ae4930ce4a91",
        "created_date": "2020-05-12T17:31:01.228531+00:00",
        "modified_date": "2020-05-12T17:31:01.228531+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.169977+00:00",
        "etl_stage_id": "bedee321-cb02-4839-a8fb-ae4930ce4a91",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755-169-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "219c8bb9-8f7d-4de7-96cd-c5e21d36b054",
        "created_date": "2020-05-12T17:31:00.875271+00:00",
        "modified_date": "2020-05-12T17:31:00.875271+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.157004+00:00",
        "etl_stage_id": "219c8bb9-8f7d-4de7-96cd-c5e21d36b054",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1924",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "8b9bc70e-a26c-4eb4-9533-6cf33c3674c8",
        "created_date": "2020-05-12T17:31:00.838595+00:00",
        "modified_date": "2020-05-12T17:31:00.838595+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.136840+00:00",
        "etl_stage_id": "8b9bc70e-a26c-4eb4-9533-6cf33c3674c8",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1731",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "b141bfa0-b318-4d98-b873-4cd1a5c97408",
        "created_date": "2020-05-12T17:31:00.804524+00:00",
        "modified_date": "2020-05-12T17:31:00.804524+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.124549+00:00",
        "etl_stage_id": "b141bfa0-b318-4d98-b873-4cd1a5c97408",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2301",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "0740b371-eeb9-49de-b353-bd1a3082469d",
        "created_date": "2020-05-12T17:31:00.655357+00:00",
        "modified_date": "2020-05-12T17:31:00.655357+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.110341+00:00",
        "etl_stage_id": "0740b371-eeb9-49de-b353-bd1a3082469d",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300-214-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ebb2e125-47ef-4a91-b322-2bce76e2cd13",
        "created_date": "2020-05-12T17:30:59.819237+00:00",
        "modified_date": "2020-05-12T17:30:59.819237+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.099650+00:00",
        "etl_stage_id": "ebb2e125-47ef-4a91-b322-2bce76e2cd13",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-253-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "1a9477f0-c647-449e-80e1-31db269aaad4",
        "created_date": "2020-05-12T17:30:59.754228+00:00",
        "modified_date": "2020-05-12T17:30:59.754228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.083807+00:00",
        "etl_stage_id": "1a9477f0-c647-449e-80e1-31db269aaad4",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1755",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "7c1cd648-fb17-4d9f-a48d-cc1340968b0e",
        "created_date": "2020-05-12T17:30:59.682226+00:00",
        "modified_date": "2020-05-12T17:30:59.682226+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.063526+00:00",
        "etl_stage_id": "7c1cd648-fb17-4d9f-a48d-cc1340968b0e",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1730",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4f952b75-4e2f-49d9-8a3e-2e51155b5223",
        "created_date": "2020-05-12T17:30:59.642373+00:00",
        "modified_date": "2020-05-12T17:30:59.642373+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.040906+00:00",
        "etl_stage_id": "4f952b75-4e2f-49d9-8a3e-2e51155b5223",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2300",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ed2db299-39ea-43c0-bd15-5f17d565f07b",
        "created_date": "2020-05-12T17:30:59.218258+00:00",
        "modified_date": "2020-05-12T17:30:59.218258+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.015616+00:00",
        "etl_stage_id": "ed2db299-39ea-43c0-bd15-5f17d565f07b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923-252-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "a46dfa3c-3c4f-4fb7-9e39-ba4b6671cd3a",
        "created_date": "2020-05-12T17:30:59.111144+00:00",
        "modified_date": "2020-05-12T17:30:59.111144+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:30.004220+00:00",
        "etl_stage_id": "a46dfa3c-3c4f-4fb7-9e39-ba4b6671cd3a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1729",
        "is_active": true,
        "down_payment": {
            "value": 66,
            "currency": "EUR"
        },
        "id": "d9dace00-74d4-4136-9071-f07d6f109a72",
        "created_date": "2020-05-12T17:30:59.106361+00:00",
        "modified_date": "2020-05-12T17:30:59.106361+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.992432+00:00",
        "etl_stage_id": "d9dace00-74d4-4136-9071-f07d6f109a72",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753-167-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "40b7edd2-69d6-44b5-964b-fc1d5ab9ca0b",
        "created_date": "2020-05-12T17:30:59.077129+00:00",
        "modified_date": "2020-05-12T17:30:59.077129+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.980181+00:00",
        "etl_stage_id": "40b7edd2-69d6-44b5-964b-fc1d5ab9ca0b",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299-212-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "81f5054f-28f7-42da-9d75-2f48c5a99b75",
        "created_date": "2020-05-12T17:30:58.711402+00:00",
        "modified_date": "2020-05-12T17:30:58.711402+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.968079+00:00",
        "etl_stage_id": "81f5054f-28f7-42da-9d75-2f48c5a99b75",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1923",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "ccfe1f4c-a5a0-4a29-a75f-41145d0444b7",
        "created_date": "2020-05-12T17:30:58.568611+00:00",
        "modified_date": "2020-05-12T17:30:58.568611+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.955212+00:00",
        "etl_stage_id": "ccfe1f4c-a5a0-4a29-a75f-41145d0444b7",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "OTELO-1728",
        "is_active": true,
        "down_payment": {
            "value": 66,
            "currency": "EUR"
        },
        "id": "e34711f7-544f-46eb-b02f-08dff80d30fc",
        "created_date": "2020-05-12T17:30:58.211995+00:00",
        "modified_date": "2020-05-12T17:30:58.211995+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.942705+00:00",
        "etl_stage_id": "e34711f7-544f-46eb-b02f-08dff80d30fc",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2299",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "e1bd87f3-b74a-4970-9b1b-cee3ca4ef877",
        "created_date": "2020-05-12T17:30:58.155118+00:00",
        "modified_date": "2020-05-12T17:30:58.155118+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.933997+00:00",
        "etl_stage_id": "e1bd87f3-b74a-4970-9b1b-cee3ca4ef877",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-260-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "67702f1a-30d3-4d8e-a70d-84dcce4fb080",
        "created_date": "2020-05-12T17:30:57.771165+00:00",
        "modified_date": "2020-05-12T17:30:57.771165+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.919204+00:00",
        "etl_stage_id": "67702f1a-30d3-4d8e-a70d-84dcce4fb080",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1753",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "077dd84f-efd7-4893-b460-6170d312e42a",
        "created_date": "2020-05-12T17:30:57.690058+00:00",
        "modified_date": "2020-05-12T17:30:57.690058+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.901372+00:00",
        "etl_stage_id": "077dd84f-efd7-4893-b460-6170d312e42a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297-213-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "c3d98e03-1af6-4d86-be4a-206cc0da2082",
        "created_date": "2020-05-12T17:30:57.650228+00:00",
        "modified_date": "2020-05-12T17:30:57.650228+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.878353+00:00",
        "etl_stage_id": "c3d98e03-1af6-4d86-be4a-206cc0da2082",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2294",
        "is_active": true,
        "down_payment": {
            "value": 66,
            "currency": "EUR"
        },
        "id": "9ef6d48e-0417-4edf-bc41-eb4a18e024af",
        "created_date": "2020-05-12T17:30:57.621698+00:00",
        "modified_date": "2020-05-12T17:30:57.621698+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.866124+00:00",
        "etl_stage_id": "9ef6d48e-0417-4edf-bc41-eb4a18e024af",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1916-259-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "63cb6648-fc79-478e-bef1-cd58be5730bd",
        "created_date": "2020-05-12T17:30:57.031984+00:00",
        "modified_date": "2020-05-12T17:30:57.031984+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.853907+00:00",
        "etl_stage_id": "63cb6648-fc79-478e-bef1-cd58be5730bd",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "O2-2291",
        "is_active": true,
        "down_payment": {
            "value": 66,
            "currency": "EUR"
        },
        "id": "399fe8b4-1a69-4fdd-994e-6418f1b2a57f",
        "created_date": "2020-05-12T17:30:57.024515+00:00",
        "modified_date": "2020-05-12T17:30:57.024515+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.841772+00:00",
        "etl_stage_id": "399fe8b4-1a69-4fdd-994e-6418f1b2a57f",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2297",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "58529fc8-7039-47aa-bd3d-1f99c318a535",
        "created_date": "2020-05-12T17:30:56.887752+00:00",
        "modified_date": "2020-05-12T17:30:56.887752+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.830925+00:00",
        "etl_stage_id": "58529fc8-7039-47aa-bd3d-1f99c318a535",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "VODAFONE-1751-165-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "84b93b76-9470-4401-a9b2-445510792b2a",
        "created_date": "2020-05-12T17:30:56.329083+00:00",
        "modified_date": "2020-05-12T17:30:56.329083+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.816275+00:00",
        "etl_stage_id": "84b93b76-9470-4401-a9b2-445510792b2a",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    },
    {
        "sku": "SM-F900FZKDDBT",
        "margin": {
            "value": 0,
            "currency": "EUR"
        },
        "plan_id": "TELEKOM-2296-211-BUNDLE",
        "is_active": true,
        "down_payment": {
            "value": 11,
            "currency": "EUR"
        },
        "id": "4ad010db-916c-4e83-a6ad-7a60f9fb66a5",
        "created_date": "2020-05-12T17:30:56.294400+00:00",
        "modified_date": "2020-05-12T17:30:56.294400+00:00",
        "tenant_id": "DEU",
        "etl_staged_at": "2020-05-12T17:35:29.788711+00:00",
        "etl_stage_id": "4ad010db-916c-4e83-a6ad-7a60f9fb66a5",
        "etl_indexed_at": "2020-05-12T17:38:55.661724+00:00",
        "etl_version": "v4"
    }
]

  let finalArray = [
    array1,
    array1,
    array1,
    array1,
    array1
  ]
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(finalArray[i]);
    }, timer*1000)
  });
}

constructPriceList(skus = []) {
  let priceList = []
  skus.forEach((obj) => {
    const devicePlanOtp = {
      'DEVICE ID': obj.sku || obj.device_sku,
      'PLAN ID': obj.plan_id || obj.carrier_plan,
      'OTP': _.get(obj, 'down_payment.value', 0),
      "IS ACTIVE": obj.is_active,
      "ENTITY TYPE": obj.entity_type || '',
      "ENTITY ID": obj.entity_id || ''
    }
    const formatDevicePlanOtp = {}
    _.forEach(Object.keys(devicePlanOtp), key => {
      formatDevicePlanOtp[key] = devicePlanOtp[key]
    })
    priceList.push(formatDevicePlanOtp);
  });
  return priceList;
}

convertToCSV(json, keys, isHeaderPresent = false) {
  const replacer = (key, value) => (value === null || value === undefined ? '' : value);
  const header = Object.keys(keys);
  let csv = json.map(row => header.map(fieldName => (JSON.stringify(row[fieldName], replacer).replace(/\\"/g, '""'))).join(','));
  if (!isHeaderPresent) {
    csv.unshift(header.join(','));
  }
  csv = csv.join('\r\n');
  return csv;
}

constructFilteredList(plans = []) {
  let filterList = [];
  _.forEach(plans, (plan) => {
    let previousDevicePlan = _.find(filterList, { 'DEVICE ID': plan['DEVICE ID'], 'PLAN ID': plan['PLAN ID'] })
    if (previousDevicePlan) {
      let index = filterList.indexOf(previousDevicePlan)
      let planDate = moment(plan['UPDATED DATE'], 'ddd MMM DD YYYY HH:mm:ss');
      let previousPlanDate = moment(previousDevicePlan['UPDATED DATE'], 'ddd MMM DD YYYY HH:mm:ss');
      if (planDate.isAfter(previousPlanDate)) {
        filterList[index] = plan
        return
      } else if (planDate.isSame(previousPlanDate)) {
        filterList[index] = plan['IS ACTIVE'] ? plan : previousDevicePlan
        return
      }
      return
    }
    filterList.push(plan);
  });
  return filterList;
}

async downLoadFile() {

      let defaultFileName =  "price_list_" + new Date().toISOString() + ".csv";
      const fileStream = streamsaver.createWriteStream(defaultFileName);
      window.writer = fileStream.getWriter();
      window.encoder = new TextEncoder();
      let priceList = [];
      let response;
      let isHeaderPresent = false;
      let i = 0;
      let fieldData;
      this.setState({isLoading: true})
      while(i < 5) {
        response =  await this.mockFetch(i, 3)
        
        priceList = this.constructPriceList(response);
        priceList = _.sortBy(priceList, ['DEVICE ID', 'PLAN ID', 'ENTITY TYPE', 'ENTITY ID']);
        let filterList = this.constructFilteredList(priceList);
        if (!_.isEmpty(filterList)) {
          fieldData = this.convertToCSV(filterList, columns['price_list_device_plan_otp'], isHeaderPresent);
        }
        isHeaderPresent = true;
        window.writer.write(window.encoder.encode(fieldData));
        window.writer.write(window.encoder.encode('\r\n'))
        i++;
      }
      this.setState({isLoading: false});
      this.setState({isDownloaded: true});
      window.writer.close();
}


render() {
  return (
    <div className="App">
      {this.state.isLoading ? 'Downloading....' : null}
      {this.state.isDownloaded ? 'Downloaded succesfully' : null}
      <button onClick = {() => this.downLoadFile()}>Click</button>
    </div>
  );
}
}

export default App;
