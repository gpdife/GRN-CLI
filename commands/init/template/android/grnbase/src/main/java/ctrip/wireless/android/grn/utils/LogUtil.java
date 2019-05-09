/*
 * Copyright Ctrip.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ctrip.wireless.android.grn.utils;

public class LogUtil {

    public static void e(String msg) {
        android.util.Log.e("ERROR", "[" + msg + "]");
    }

    public static void e(String msg, Throwable thr) {
        android.util.Log.e("EXCEPTION", "##异常信息##:[" + msg + "]");
        if (thr != null) {
            thr.printStackTrace();
        }
    }

    public static void e(String tag, String msg) {
        android.util.Log.e(tag, msg);
    }


}
