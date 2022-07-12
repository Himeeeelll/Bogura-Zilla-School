                }, 1000);
            }
        } else {
            document.querySelector(".text_hide").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
            ], timings_2);

            document.querySelector(".text_cursor").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
            ], timings_2);
        }

        left_instance = left_instance + ((100 / text_len) * (word_len[i] + 1));
    }
}
typing_animation();
