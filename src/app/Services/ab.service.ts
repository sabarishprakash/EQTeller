import { Injectable } from '@angular/core';
import { ab } from '../Models/ab.model';
import { ENQoutput } from '../Models/io.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbService {

  constructor(private http: HttpClient) { }

  processAB(postData: ab) {
    return this.http.post<ENQoutput>('ab', postData);
  }

  getData(data: string) {
    return {
      branch:  data.substring(0,4),
      account: data.substring(4,10),
      suffix:  data.substring(10,13),
      customerShortName: data.substring(13,28),
      customerMnemonic: data.substring(43,49),
      customerLocation: data.substring(49,52),
      customerFullName: data.substring(52,87),
      accountType:data.substring(122,124),
      owningApplicationCode: data.substring(124,126),
      accountStructure: data.substring(126,127),
      currencyMnemonic: data.substring(127,130),
      currencyEditField: data.substring(130,131),
      is_internal_Or_Noncustomer_Account: data.substring(131,132),
      is_Deceased_Or_Liquidated: data.substring(132,133),
      is_Blocked: data.substring(133,134),
      is_Inactive: data.substring(134,135),
      is_Closing: data.substring(135,136),
      overdraftLimit: data.substring(136,152),
      limitExpiryDate: data.substring(152,159),
      is_Overdraft_Expired: data.substring(159,160),
      reservedBalance: data.substring(160,176),
      ledgerBalance: data.substring(176,192),
      statusBalance: data.substring(192,208),
      previousClearedBalance: data.substring(208,224),
      currentClearedBalance: data.substring(224,240),
      currentAvailableBalance: data.substring(240,256),
      is_CurrentAvailableBalance: data.substring(256,257),
      laterAvailableBalance: data.substring(257,273),
      is_laterAvailableBalance: data.substring(273,274),
      nextAvailableBalance: data.substring(274,290),
      nextAvailableBalance1: data.substring(290,306),
      isnextAvailableBalance: data.substring(306,307),
      forwardBalance: data.substring(307,323),
      is_forwardBalance: data.substring(323,324),
      clearingToday: data.substring(324,340),
      clearingLaterToday: data.substring(340,356),
      clearingTomorrow: data.substring(356,372),
      clearingAfterTomorrow: data.substring(372,388),
      shadowCredits: data.substring(388,404),
      shadowDebits: data.substring(404,420),
      shadowAdjustments: data.substring(420,436),
      od_against_uc_cheques: data.substring(436,437),
      susp_od_uc_cheques: data.substring(437,438),
      notice_AC_specialCondition: data.substring(438,439),
      withdrwalsMaturingToday: data.substring(439,455),
      is_Closing_Withdrwal: data.substring(455,456),
      withdrwalsMaturingTomarrow: data.substring(456,472),
      is_Closing_Withdrwal_Tomarrow: data.substring(472,473),
      withdrwalsMaturingAfterTomarrow: data.substring(473,489),
      is_Closing_Withdrwal_After_Tomarrow: data.substring(489,490),
      holdQueuedAmount: data.substring(490,511),
      customerGroup: data.substring(511,517),
      realTimeBalanceOrder: data.substring(517,518),
      extAccountNo: data.substring(518,538),
      editedExtAccountNo: data.substring(538,563),
      IBAN: data.substring(563,597),
      editedIBAN: data.substring(597,644),
      dateOpened: data.substring(644,651),
      dateClosed: data.substring(651,658),
      customerType: data.substring(658,659)
    }
  }

}
