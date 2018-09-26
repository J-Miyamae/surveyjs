//Uncomment this line on creating a translation file
import { surveyLocalization } from "../surveyStrings";

export var englishStrings = {
  pagePrevText: "前",
  pageNextText: "次",
  completeText: "完了",
  startSurveyText: "スタート",
  otherItemText: "Other (describe)",
  noneItemText: "None",
  selectAllItemText: "全て選択",
  progressText: "Page {0} of {1}",
  emptySurvey: "There is no visible page or question in the survey.",
  completingSurvey: "調査へのご協力ありがとうございました！",
  completingSurveyBefore:
    "Our records show that you have already completed this survey.",
  loadingSurvey: "Survey is loading...",
  optionsCaption: "選択してください...",
  value: "value",
  requiredError: "質問に回答してください。",
  requiredErrorInPanel: "Please answer at least one question.",
  requiredInAllRowsError: "全ての質問に回答してください。",
  numericError: "値は数値でなければなりません。",
  textMinLength: "{0} 文字以上入力してください。",
  textMaxLength: "{0} 文字以下で入力してください。",
  textMinMaxLength: "{0} 文字以上 {1} 文字以下で入力してください。",
  minRowCountError: "Please fill in at least {0} rows.",
  minSelectError: "Please select at least {0} variants.",
  maxSelectError: "Please select no more than {0} variants.",
  numericMinMax:
    "The '{0}' should be equal or more than {1} and equal or less than {2}",
  numericMin: "The '{0}' should be equal or more than {1}",
  numericMax: "The '{0}' should be equal or less than {1}",
  invalidEmail: "正しいEメールアドレスを入力してください。",
  invalidExpression: "The expression: {0} should return 'true'.",
  urlRequestError: "The request returned error '{0}'. {1}",
  urlGetChoicesError:
    "The request returned empty data or the 'path' property is incorrect",
  exceedMaxSize: "ファイルサイズは {0}を超えてはいけません。",
  otherRequiredError: "別の値を入力してください。",
  uploadingFile:
    "Your file is uploading. Please wait several seconds and try again.",
  loadingFile: "ロードしています...",
  chooseFile: "Choose file(s)...",
  confirmDelete: "本当に削除しますか？",
  keyDuplicationError: "ユニークな値でなければなりません。",
  addColumn: "列の追加",
  addRow: "行の追加",
  removeRow: "削除",
  addPanel: "新規追加",
  removePanel: "削除",
  choices_Item: "item",
  matrix_column: "列",
  matrix_row: "行",
  savingData: "サーバーに保存しています...",
  savingDataError: "エラーが発生して、サーバーに保存できませんでした。",
  savingDataSuccess: "結果が保存されました！",
  saveAgainButton: "再トライ",
  timerMin: "分",
  timerSec: "秒",
  timerSpentAll: "You have spent {0} on this page and {1} in total.",
  timerSpentPage: "You have spent {0} on this page.",
  timerSpentSurvey: "You have spent {0} in total.",
  timerLimitAll:
    "You have spent {0} of {1} on this page and {2} of {3} in total.",
  timerLimitPage: "You have spent {0} of {1} on this page.",
  timerLimitSurvey: "You have spent {0} of {1} in total.",
  cleanCaption: "クリア",
  clearCaption: "クリア",
  removeFileCaption: "ファイルを削除"
};

//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
surveyLocalization.locales["jp"] = japaneseStrings;
surveyLocalization.localeNames["jp"] = "Japanese";
